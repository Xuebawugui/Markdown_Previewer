import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to My Markdown Previewer!

## Sub-heading
[Visit freeCodeCamp](https://www.freecodecamp.org)

Inline code: \`<div>Hello</div>\`

\`\`\`javascript
// Code block
function greet() {
  return "Hello, World!";
}
\`\`\`

- List item

> This is a blockquote

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**Bolded text**
`);
  const [editorFocused, setEditorFocused] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="row">
          <div className="col-md-6">
            <div className={`editor-container${editorFocused ? ' focused' : ''}`}>
              <div className="editor-header">Editor</div>
              <textarea
                id="editor"
                value={markdown}
                onChange={handleChange}
                onFocus={() => setEditorFocused(true)}
                onBlur={() => setEditorFocused(false)}
              ></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="preview-container">
              <div className="preview-header">Preview</div>
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 