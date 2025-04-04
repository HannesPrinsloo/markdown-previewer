import { marked } from 'marked';
import { useState } from 'react';
import React from 'react';
import './App.css';

marked.setOptions({
  breaks: true,
});


const initialMD = `# Markdown Previewer

## This is a sub-heading.

Here 👉 \`const inlineCode = () => console.log(" is some inline code 🤘 ")\`

Here is some block code: 

\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\`

Here is a list:

- Item 1
- Item 2
- Item 3

Here is a link: [freeCodeCamp](https://www.freecodecamp.org)

> This is a blockquote.

Here is some **bold** text.

Here is some *italic* text.

Here is a picture of Pikachu:

![Pikachu](https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png)


**This is bold text.**
`; 

function Markdown({ onInputChange }) {
  const [postContent, setPostContent] = useState(initialMD);

  const handleChange = (event) => {
    setPostContent(event.target.value);
    onInputChange(event.target.value); // Call the function passed from App
  };

  return (
    <textarea
      id="editor"
      value={postContent}
      onChange={handleChange}
    />
  );
}

function Preview({ markdown }) {
  const renderedHTML = marked.parse(markdown);
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: renderedHTML }}></div>
  );
}

export default function App() {
  const [markdownInput, setMarkdownInput] = useState(initialMD);

  const handleInputChange = (markdown) => {
    setMarkdownInput(markdown);
  };

  return (
    <div className="App">
      <h1 className="App-title">Markdown Previewer</h1>
      <Markdown onInputChange={handleInputChange} />
      <Preview markdown={markdownInput} />
    </div>
  );
}
