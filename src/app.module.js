'use strict';

var NgModule = require('@angular/core').NgModule
var BrowserModule = require('@angular/platform-browser').BrowserModule
var FormsModule = require('@angular/forms').FormsModule
var AppComponent = require('./app.component')
var HeroDetailComponent = require('./hero-detail.component')
var HeroService = require('./hero.service')

module.exports = NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
}).Class({
    constructor: function AppModule() {
    }
})
