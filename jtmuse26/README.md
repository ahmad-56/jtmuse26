# JT Muse '26

The website for the fourth edition of JT Muse, the arts olympiad organized by the Arts Council of LGS Johar Town. It brings the event details, competition categories, study guides, registration form, and contact information together so teams can find what they need in one place.

The site is built with React 19, React Router 7, Vite, and Tailwind CSS 4. Registration uses an embedded Fillout form.

## Running it locally

You'll need Node.js 20 or newer and npm. Open a terminal in this folder, then install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the address printed in the terminal, usually `http://localhost:5173`. Changes to the code will appear as you save them.

## Where to make changes

Most day-to-day updates happen in these files:

| What you want to update | Where to look |
| --- | --- |
| Category names and study guide links | `app/subCategoryData.js` |
| Category cards and badges | `app/routes/subCategory.jsx` |
| Homepage layout | `app/routes/home.jsx` |
| Homepage sections, navigation, and footer | `app/components/` |
| Registration form | `app/routes/register.jsx` |
| Contact details | `app/ContactInfo.js` |
| Shared styles, colors, and animations | `app/app.css` |
| Page metadata and shared layout | `app/root.jsx` |
| Page routes | `app/routes.js` |

Images, fonts, and PDFs live in `public/assets/`. To replace a study guide, add the PDF to the appropriate folder under `public/assets/study guides/`, then update its path in `app/subCategoryData.js`. Public links start with `/assets/`, without `public/`, and spaces in URLs are written as `%20`.

## Checking a production build

Before deploying a change, build the site and start the production server:

```bash
npm run build
npm start
```

Open the address shown in the terminal and check the pages you changed. For category updates, also click the study guide links to make sure they open the right files.

The build creates `build/client/` for browser assets and `build/server/` for server rendering. A successful build is useful, but checking the running site can catch issues that only appear when a page loads.

## Running with Docker

If you use Docker, the included Dockerfile handles installing dependencies and building the site:

```bash
docker build -t jtmuse26 .
docker run --rm -p 3000:3000 jtmuse26
```

Then open `http://localhost:3000`.
