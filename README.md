# Getting Started

After you have cloned this application you can get started by following these steps:


## Step 1

Install the dependencies using `npm install` in both the front end and backend folders:

`npm install`

`cd backend`

`npm install`

`cd ..`

## Step 3

Make sure you have created the `dev.js` file under the folder `backend/config/keys/dev.js`, for example:

```
module.exports = {
  insuremo: {
    api_token: 'eBaoxxxxxx',
    tenant_id: 'indeez'
  }
}
```

You can get the `api_token` from the InsureMO portal under "API Management", then "Access Token Management".

You can also update the details in the environment files under `src/app/environments`

## Step 3

You can run both the frontend application and backend application using the following script in the base folder:

`npm run dev`

This will concurrently start the backend server & frontend angular application. Any changes you make will be applied to the running app.


# IncomeProtectionClaimApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
