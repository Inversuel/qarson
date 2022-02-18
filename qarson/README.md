## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the Front-End-App in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn startdev`

Runs the Back-End-App need to use new terminal window.\
I use json-server for back-end.\
Open [http://localhost:8000/offers]


### `Test using the same json file as application so the best options is open the file before runing test and after undo any changes on file. I know not the best option but We work with file. If the is any option for reset file after each change I would love to know it.`
### `yarn test`

Runs E2E test without UI.\

### `yarn testWithUi`

Runs E2E test with UI.\



"startdev": "npx json-server --watch --port 8000 data/data.json",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "testWithUi": "run cypress open",
    "test": "run cypress run",