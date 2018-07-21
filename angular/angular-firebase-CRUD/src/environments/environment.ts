// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDEmxFhzNG9Ubx4Zuhvd6okauQyer9d_YI',
    authDomain: 'just-to-practice.firebaseapp.com',
    databaseURL: 'https://just-to-practice.firebaseio.com',
    projectId: 'just-to-practice',
    storageBucket: 'just-to-practice.appspot.com',
    messagingSenderId: '919109135580'
  }
};
