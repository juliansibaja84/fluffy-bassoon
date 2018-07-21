// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBS6UfE9ZEuzY9LqNcDavE8nqU9-zZ4RwM',
    authDomain: 'magick-project.firebaseapp.com',
    databaseURL: 'https://magick-project.firebaseio.com',
    projectId: 'magick-project',
    storageBucket: '',
    messagingSenderId: '807375201850'
  }
};
