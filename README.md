# Nordlys Renhold

A fictional cleaning-company website concept built with React and Vite.

## About the project

Nordlys Renhold is a **fictional** cleaning-company website concept. I built it to demonstrate my frontend development skills. It is **not a real business**, and nothing on the site represents real services, offers or contact details.

The site content is written in Norwegian Bokmål.

## Features

- Responsive layout for mobile, tablet and desktop
- Services, benefits, process, pricing information and FAQ sections
- Accessible navigation and semantic HTML
- Contact form with required-field and email validation
- Contact form creates an email handoff (a `mailto:` link) only when a real recipient address is configured. It does not send messages to a server.
- Custom SVG favicon

## Tech stack

- React
- JavaScript
- Vite
- CSS

## Getting started

Requires [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. It is usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

The build output is written to `dist/`. To preview it locally, run `npm run preview`.

## Deployment

Pushing to `main` automatically builds and deploys the site to [GitHub Pages](https://sondregiav.github.io/nordlys-renhold/). The workflow can also be started manually from the repository's Actions tab.

## Accessibility

Implemented features:

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and section headings
- Labelled primary and footer navigation
- Skip link to the main content
- Visible keyboard focus styles
- Form fields with associated labels, marked as required
- Native form validation, with a status message announced through a live region
- FAQ built with native `details`/`summary` elements
- Reduced-motion preferences respected

A formal accessibility audit has not been completed.

## Project status

This is a portfolio concept project. Before real email handoff can work, set the contact form recipient by replacing the `CONTACT_EMAIL` placeholder in [`src/App.jsx`](src/App.jsx) with a real address. Until then, the form shows a message that no recipient is configured.
