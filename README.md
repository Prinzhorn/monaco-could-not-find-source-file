Reproducible in Chrome 80.0.3987.106 on Ubuntu 19.10

```sh
npm install
npm start
```

```
errors.js:12 Uncaught Error: Could not find source file: 'inmemory://model/1'.

Error: Could not find source file: 'inmemory://model/1'.
    at y (ts.worker.js:82)
    at Object.getCodeFixesAtPosition (ts.worker.js:82)
    at t.getCodeFixesAtPosition (ts.worker.js:86)
    at n.fmr (ts.worker.js:74)
    at e._handleMessage (ts.worker.js:15)
    at Object.handleMessage (ts.worker.js:15)
    at r._handleMessage (ts.worker.js:15)
    at r.handleMessage (ts.worker.js:15)
    at e.onmessage (ts.worker.js:15)
    at self.onmessage (ts.worker.js:76)
    at errors.js:12

(anonymous) @ errors.js:12
setTimeout (async)
ErrorHandler.unexpectedErrorHandler @ errors.js:10
ErrorHandler.onUnexpectedExternalError  @ errors.js:29
onUnexpectedExternalError @ errors.js:45
(anonymous) @ codeAction.js:142
step  @ codeAction.js:49
(anonymous) @ codeAction.js:30
rejected  @ codeAction.js:22
Promise.then (async)
step  @ codeAction.js:23
(anonymous) @ codeAction.js:24
__awaiter @ codeAction.js:20
(anonymous) @ codeAction.js:123
getCodeActions  @ codeAction.js:123
(anonymous) @ codeActionModel.js:188
createCancelablePromise @ async.js:13
(anonymous) @ codeActionModel.js:188
CodeActionOracle._createEventAndSignalChange  @ codeActionModel.js:125
CodeActionOracle.trigger  @ codeActionModel.js:43
CodeActionModel._update @ codeActionModel.js:194
(anonymous) @ codeActionModel.js:159
Emitter.fire  @ event.js:509
LanguageFeatureRegistry.register  @ languageFeatureRegistry.js:43
registerCodeActionProvider  @ standaloneLanguages.js:289
setupMode @ languageFeatures.js:913
setupJavaScript @ languageFeatures.js:913
(anonymous) @ monaco.contribution.js:203
Promise.then (async)
LazyPromise.then  @ bundle-loader.js:77
(anonymous) @ monaco.contribution.js:203
(anonymous) @ standaloneLanguages.js:42
Emitter.fire  @ event.js:509
ModeServiceImpl._getOrCreateMode  @ modeServiceImpl.js:105
ModeServiceImpl._createModeAndGetLanguageIdentifier @ modeServiceImpl.js:93
(anonymous) @ modeServiceImpl.js:80
LanguageSelection @ modeServiceImpl.js:31
ModeServiceImpl.create  @ modeServiceImpl.js:78
createModel @ standaloneEditor.js:101
StandaloneEditor  @ standaloneCodeEditor.js:192
(anonymous) @ standaloneEditor.js:58
withAllStandaloneServices @ standaloneEditor.js:45
create  @ standaloneEditor.js:57
parcelRequire.index.js.monaco-editor  @ index.js:21
newRequire  @ monaco-could-not-fin…file.e31bb0bc.js:47
(anonymous) @ monaco-could-not-fin…file.e31bb0bc.js:81
(anonymous) @ monaco-could-not-fin…ile.e31bb0bc.js:120
```
