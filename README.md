# Akron rubric response site

A static website version of the Akron rubric doc. No build step.

## Edit the answers

Everything the page says is in `content.js`. Each row looks like:

```js
{ q: "The district's question", answer: "Our answer", media: { src, alt, caption } }
```

- `answer: ""` shows a yellow "Needs an answer" box.
- `draft: true` marks wording that isn't client-ready yet.
- The "Draft" note at the top disappears once no row is blank or marked draft.
- `contact` at the top fills in the rep's name and email in the footer.

## Add a screenshot or clip

Put the file in `assets/img/` and point `media.src` at it. Images (`.avif`, `.png`, `.jpg`) and
short videos (`.mp4`) both work; videos loop silently and open with controls when clicked.

## Make one for another district

Copy this whole folder, rename it, and rewrite `content.js`.

## Focus mode

Clicking any row opens it large, with ‹ › (or the arrow keys, or a swipe on phones) to step through
every row. Each row has its own link, `#q-1` to `#q-47`, so a rep can send someone straight to one answer.

## Publishing changes

The site is served by GitHub Pages from the `main` branch. After editing, commit and push; Pages
redeploys in a minute or two. When you change `styles.css`, `app.js` or `content.js`, bump the
`?v=` number on their tags in `index.html` so browsers don't keep showing the old copy.

## Preview locally

```bash
cd ~/rubric-sites/akron && python3 -m http.server 4321
```

Then open http://127.0.0.1:4321.
