/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBmPJlu3lcVmsDeCHGR1QTCotv-L9gtVTk",
    authDomain: "perfumeria-223522.firebaseapp.com",
    databaseURL: "https://perfumeria-223522.firebaseio.com",
    projectId: "perfumeria-223522",
    storageBucket: "perfumeria-223522.appspot.com",
    messagingSenderId: "970465344723"
  }
};
