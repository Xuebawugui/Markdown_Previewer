# Markdown Previewer

A responsive, stylish Markdown Previewer built with pure HTML, CSS, and JavaScript, using the [marked](https://marked.js.org/) library. This project fulfills all [freeCodeCamp Markdown Previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) user stories and passes the official test suite.

## Features

- **Live Preview:** Edit Markdown in the left editor and see the rendered HTML instantly on the right.
- **GitHub Flavored Markdown:** Supports GFM features like code blocks, lists, blockquotes, images, links, and more.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **No Build Tools Required:** Just open `index.html` in your browser or serve it with any static server.
- **All Requirements Met:** Includes all required Markdown elements (header, sub-header, link, inline code, code block, list, blockquote, image, bold text) in the default content.

## Usage

1. **Clone or Download this Repository**
2. **Open `index.html` in your browser**
   - For best results, use a local server (e.g. VSCode Live Server, Python's `http.server`, etc.)
3. **Start editing Markdown in the editor!**
   - The preview updates in real time.

## Project Structure

```
index.html   # Main HTML file (contains all logic and styles)
```

## Dependencies

- [marked](https://cdn.jsdelivr.net/npm/marked@4.0.12/marked.min.js) (loaded via CDN)
- No npm, no node_modules, no build step required

## freeCodeCamp User Stories Covered

- A textarea with `id="editor"` for Markdown input
- A preview area with `id="preview"` for rendered HTML
- Real-time rendering as you type
- GitHub-flavored Markdown support (via marked)
- Default content covers all required Markdown features

## License

MIT 