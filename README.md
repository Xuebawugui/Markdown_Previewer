# Markdown Previewer (React Version)

A beautiful, responsive Markdown Previewer built with **React** and the [marked](https://marked.js.org/) library. This project fulfills all [freeCodeCamp Markdown Previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) user stories and passes the official test suite.

## Features

- **Live Preview:** Edit Markdown in the left editor and see the rendered HTML instantly on the right.
- **GitHub Flavored Markdown:** Supports GFM features like code blocks, lists, blockquotes, images, links, and more.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Modern UI:** Book-style layout, gradient background, card-style editor/preview, and input focus feedback.
- **All Requirements Met:** Default content covers all required Markdown elements (header, sub-header, link, inline code, code block, list, blockquote, image, bold text).

## Usage

1. **Clone or Download this Repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
4. **Open in your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
5. **Start editing Markdown in the editor!**
   - The preview updates in real time.

## Project Structure

```
public/
  index.html
src/
  App.js
  App.css
  index.js
package.json
README.md
```

## Dependencies

- [React](https://reactjs.org/)
- [marked](https://www.npmjs.com/package/marked)

## freeCodeCamp User Stories Covered

- A textarea with `id="editor"` for Markdown input
- A preview area with `id="preview"` for rendered HTML
- Real-time rendering as you type
- GitHub-flavored Markdown support (via marked)
- Default content covers all required Markdown features

## Ignore node_modules when pushing to GitHub

请确保项目根目录有 `.gitignore` 文件，内容如下：

```
node_modules/
```

这样提交到 GitHub 时不会包含庞大的依赖文件夹。

## License

MIT 