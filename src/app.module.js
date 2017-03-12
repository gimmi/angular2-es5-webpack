'use strict';

var NgModule = require('@angular/core').NgModule
var BrowserModule = require('@angular/platform-browser').BrowserModule
var AppComponent = require('./app.component')

module.exports = NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
}).Class({
    constructor: function AppModule() {
    }
})
