'use strict';

var platformBrowserDynamic = require('@angular/platform-browser-dynamic').platformBrowserDynamic
var AppModule = require('./app.module')

platformBrowserDynamic().bootstrapModule(AppModule);
