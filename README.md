# Connex-One Technical Challenge
 An application consisting of an API and client to display the results from the API.

 ## Required technologies to run the application
  * [Node.js](https://nodejs.org/en/) - run time environment for JS applications


 ## Getting Started
 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

 Download the project

 `git clone https://github.com/Kristiyandz/connex-one.git`

 Install dependenices

 `npm i`

 ## Start the application

 To start the application you must naviagte inside both `server` and `client`

 Navigate insude `server` and run `npm start`. This should serve the application on `port 3000`

 Navigate inside `client` and run `npm start`. Ths should prompt you to serve the applciation on a different port.

 ## Running the tests
 To run the tests for a specific application, navigate in the respective folder and run `npm test`

 ## Building the client
 To create a build version, navigate into `client` and run `npm run build`
 
 This command should create a build version ready to de deployed and you can serve it locally by running `serve -s build`
 ## Built With
  * [Express-generator](https://www.google.com) - generates express application
  * [CRA Typescript](https://create-react-app.dev/docs/adding-typescript/) - tool to generate react application using typescript
  * [Express-Prometheus Middleware](https://www.npmjs.com/package/express-prometheus-middleware) - middleware exposing metrics for prometheus

  ## Authors
  [Kristiyan Dzhakov](https://github.com/Kristiyandz)

  ## Acknowledgments
  The Connex-One Team
