## Folder Structure

After creation, your project should look like this:

```
justbuyit-frontend/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
      Users/
        index.js
      settings.js
    assets/
      images/
        logo.svg
      stylesheets/
        App.css
        index.css
    components/
      Users/
        Edit.jsx
        Index.jsx
        Notice.jsx
        ProfileEdit.jsx
      App.jsx
    features/
    lib/
      ui/
        BoxProgress.jsx
        CircularIntegration.jsx
        Footer.jsx
        Header.jsx
        LoadingProgress.jsx
      Root.jsx
    reducers/
      Users/
        index.js
      index.js
    static/
      Contact.jsx
      Privacy.jsx
      QA.jsx
      Term.jsx
    tests/
      App.test.js
    index.js
```

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


See the section about [deployment](#deployment) for more information.
