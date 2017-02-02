// polyfills
import 'core-js';

// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'reflect-metadata';

require('zone.js/dist/zone');

if (process.env.ENV !== 'production') {
  require('zone.js/dist/long-stack-trace-zone');
}

// Angular 2 Deps
import 'rxjs/Rx';
