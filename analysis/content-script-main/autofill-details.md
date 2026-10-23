# Static autofill trace for contentScriptMain.js

These findings come from bounded text inspection of the shipped bundle and its formatted copy, not target execution. All line references below are one-based in [the readable bundle](contentScriptMain.readable.js). The parent task verified that this formatted copy has an equivalent parsed AST. Original declaration character offsets from [the provenance manifest](provenance.json) are: `Rk` 599364–606075, `_S` 617605–629661, `ZC` 659272–668849, `XT` 753694–768824, `lN` 770218–784838 (end offsets exclusive).

## Top-level flow established by the code

The observed data/control flow is:

`XT: normalize candidate/profile → tj: discover configured DOM fields → lN: load/resolve answers → ZC: schedule field filling → JC: dispatch field kind → _S or jw: choose and run a DOM handler`.

This is a logical dependency chain across React hooks/effects, not one synchronous function call. Concrete wiring appears at lines 65283 (`XT`), 56969 (`tj`), 56991 (`lN`), 50436 (`ZC`), and 49266 (`JC` inside `ZC`).

### 1. Profile normalization — XT, line 55021

`XT` receives the linked candidate, job information, remote configuration, subscription/settings, selected resume, cover letter, selected skills, and resume-experience preference. It clones the candidate into memoized working data (55049–55053) and returns a memoized normalized profile. The body through approximately 55675 supplies full/preferred name variants, resume/cover-letter URL and filename, phone variants, geography using configured mappings, date formats, education/employment summaries, job-location-dependent work authorization, skills, languages, and websites. The caller passes its selected application email too (65283–65309).

This establishes local preparation of profile data for filling. It does not establish how the background service initially obtained the candidate, resume, or remote configuration.

### 2. DOM discovery — tj, line 52387

The discovery hook combines base selectors with `ATSConfig.inputSelectors`, honors configured DOM ordering, and merges persisted tracked selectors with `ATSConfig.trackedInputSelectors` (52511–52528). Its map-building path requires an ATS key, container, and normalized profile; it calls `uE` and uses DOM mutation observation to invalidate cached discovery (52532–52580).

The tracked-field branch (52582–52718) interprets `fieldPath`, `labelPath`, `inputPath`, and `optionsPath`; finds elements with `Pe`; extracts labels with `NE`; removes required/optional decoration; creates label-derived tracked IDs with duplicate suffixes; and retains field, label, input, and option element references. Native selects gain an option path when needed. Visibility and element predicates filter candidates. The resulting maps/statuses are supplied directly to `lN` (56969–57000).

The site adaptation visible here is primarily driven by `ATSConfig` selectors and methods. This pass does not resolve the complete per-site selector catalog or which handler every ATS selects.

### 3. Answer resolution — lN, line 55798

This hook maintains tracked question state, loads stored context, persists permitted fields, and combines local/profile answers with background responses. Storage keys include the field context, tracked application, and ATS key (55814–55825). Its synchronization effect resets stale answer/provenance fields when the section context changes and can load previous values through `Yc` (from 55855).

There are three explicit background-message boundaries:

- Single question: `requestGPTValue` (55988).
- Unified batch: `requestCopilotAnswerForTrackedInputs`, carrying tracked inputs, job information, and an answer policy (56094–56099).
- Legacy batch: `requestGPTValues`, carrying tracked inputs, job information, and `generateAnswers` (56117–56122).

The local response-processing path distinguishes mapped profile responses, copilot responses, and unanswerable results. It applies configured profile-key corrections, resolves profile values/options, stores response IDs/provenance, and handles missing, declined, speculative, or invalid-option responses. These branches should not be summarized as every field being sent to or answered by a model: there are local resolutions, exclusions, and settings gates.

Automatic batching is gated by `fullAIAutofillEnabled` and `autofillAllWithAI` (56490). It deduplicates labels per page URL (56491–56505). Choice questions normally wait for their option catalog; configured speculative prefetch can relax that requirement (56518–56527). It can reask after options appear, marks pending options, and batches the remaining eligible fields (56614–56622, 56767–56796). The hook returns the individual/batch request functions and in-flight counter (56808–56812).

The names of these messages do not reveal the actual model, prompt, backend request, or server implementation. Those remain background/service boundaries.

### 4. Scheduling and dispatch — ZC, line 48629; JC, line 48253

`ZC` persists filling key paths and status using the tab, application identifier, and URL (from 48647). It computes eligible fields, picks the active key path, updates progress/status, and coordinates waiting for answers and timeout cleanup. `ATSConfig.fillInputInterval` defaults to 40 (48756). It calls `JC` with the selected field, configuration, profile, maps, and in-flight-answer state (49266).

`JC` guards active key paths with a set and uses an abort controller. It distinguishes ordinary configured inputs, tracked inputs, and input groups: ordinary inputs go to `jw` (48302); tracked inputs go to `_S` (48343); input groups have add/confirm/remove and rediscovery handling (from 48369). The reported fill percentage is scheduler progress and should not be represented as a measured percentage of correctly completed answers.

### 5. Tracked field fill — _S, line 45764

`_S` reads the stored answer, profile, settings, ATS config, live field references, in-flight requests, and recommit flag. It obtains a current element and normalizes some supplied values (45818–45824). The following branches apply configured field exclusions and optional-answer policy, distinguish waiting from skipped/missing answers, respect disabled profile categories, and check answer/control compatibility. Helpers `Kw`, `Yw`, and `Qw` at 44393–44432 are relevant to configured exclusions; they are separate from `Rk` below.

The fill path re-finds elements after DOM changes, obtains dropdown options (including lazily exposed options), matches answer alternatives to options, and enforces a configurable deadline/abort. Handler precedence is explicit at 46171: configured fill actions, option click, ATS default method, then the default handler. Split dates are filled segment by segment through `sr` (46201–46214); compatible date pickers use `mn` (46189). Ordinary handler invocation receives the resolved value, alternatives, abort signal, recommit flag, and recursive access to `jw` (46217–46255). Results and caught errors update the field status. These are implementation paths, not proof that a particular live form accepted the value.

### 6. Framework/site handlers — jw and xx

`jw` (43844) is the ordinary configured-input fill function. It can re-find disconnected controls, run configured actions, wait for select options, and choose `xx[method]` with a default fallback (43987). `xx` (42640) exposes handlers for native value/click/select/checkbox operations, React, jQuery, Dijit, UI5, TinyMCE, page-script bridging, date-picker/listbox handling, and resume/cover-letter upload.

The React handler at 42737 delegates ordinary values to `lx`, with a native fallback for the explicit missing-React-handler condition. `lx` (42321–42366) posts `__simplify__fillInput` to the page and waits for a matching-key-path `__simplify__updateFilledInput` response. That is an additional execution boundary; inspecting this caller alone does not establish all page-side handler behavior.

The low-level `sr` (7303–7356) focuses/clicks supported inputs, tries `execCommand("insertText")` for suitable text controls, and otherwise uses a setter plus input/key/change events. `rr` (7242–7263) chooses the prototype setter where needed for controlled inputs. File construction in `cr` (7387 onward) asks the background for `getFile`, then creates a `File`/`DataTransfer`; this does not show an actual download occurred.

## Rk is an answer-event exclusion list, not the fill-skip mechanism

`Rk` starts at 44736 and contains patterns concerning bot checks, CAPTCHA, honeypots, prompt injection, and AI-use questions. Its observed reference is the sensitivity classifier within `mS` (45255–45257), which labels matching answer events `excluded`. `AS` explicitly drops events with that classification before enqueueing them (45489–45498); accepted events can reach `queueAnswerEvent` via `yS` (45396–45402).

Therefore the supported claim is that this local telemetry path suppresses matching answer events. `Rk` alone is not evidence that matching fields are skipped, detected reliably, solved, or bypassed. Field-fill exclusion decisions need the separate `_S`/`Kw`/`Yw`/`Qw` paths and their configuration.

## Limits

This is a targeted static trace of a minified shipped bundle. Variable names are preserved obfuscated names, and the readable copy is formatting rather than recovered original TypeScript/source modules. No extension code, browser interaction, target network request, or autofill was executed. Background message handlers, live remote-config values, complete ATS coverage, page-side bridge behavior, and runtime success remain unresolved. Cross-chunk references in REA output must not be treated as fully resolved merely because this text trace connects selected declarations.
