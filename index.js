import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
  getWorkerUrl: function(moduleId, label) {
    if (label === 'json') {
      return './json.worker.js';
    }
    if (label === 'css') {
      return './css.worker.js';
    }
    if (label === 'html') {
      return './html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.js';
    }
    return './editor.worker.js';
  }
};

let editor = monaco.editor.create(document.getElementById('container'), {
  value: '_',
  language: 'javascript'
});

requestIdleCallback(function() {
  editor.dispose();
});
