# emflix (ng-new-app)

Make sure you have node.js latest stable & @angular-cli installed on your system before running below commands

- Run

```bash
npx ng-new-app your-app-name
```

if you don't have npx, Run -

```bash
sudo npm i ng-new-app -g
```

and

```bash
ng-new-app your-app-name
```

- Run`npm install`
- Run`npm start`

| command                   | What it does?                                                        | Thanks to Plugin                                                                 |
| ------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `npm start`               | Starts the server in dev mode 🤷🏻‍♂️                                     |                                                                                  |
| `npm run lint`            | Runs ESLint on project                                               |                                                                                  |
| `npm run prettier`        | Runs prettier on entire src folder                                   |                                                                                  |
| `npm run prettier:verify` | Runs prettier-check and throws error if fails                        |                                                                                  |
| `npm run prettier:staged` | Runs prettier on only staged (changed) files                         |                                                                                  |
| `npm run final-build`     | Takes prod build and runs PurgeCSS script                            |                                                                                  |
| `npm run prod-test`       | Takes a final-build deployes on local server and give you url to run | [serve](https://www.npmjs.com/package/serve)                                     |
| `npm run purgecss`        | Run PurgeCSS job to reduced style.css size into few kbs              | [purgecss](https://www.npmjs.com/package/purgecss)                               |
| `npm run source`          | Takes a final-build and opens up source-map-explorer view            | [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)         |
| `npm run webpack-analyze` | Takes a final-build and opens up webpack-bundle-analyzer view        | [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) |
| `npm run test`            | Runs all the jests test cases                                        | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run test:coverage`   | Runs all the jests test cases and generate coverage report           | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run e2e`             | Opens up Cypress View to run your e2e tests in browser               | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |
| `npm run e2e:ci`          | Runs cypress tests in console (used for CI/CD)                       | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |
