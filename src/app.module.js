'use strict';

var NgModule = require('@angular/core').NgModule
var BrowserModule = require('@angular/platform-browser').BrowserModule
var FormsModule = require('@angular/forms').FormsModule
var RouterModule = require('@angular/router').RouterModule

var AppComponent = require('./app.component')
var HeroesComponent = require('./heroes.component')
var HeroDetailComponent = require('./hero-detail.component')
var HeroService = require('./hero.service')
var DashboardComponent = require('./dashboard.component')


module.exports = NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'dashboard', component: DashboardComponent },
            { path: 'heroes', component: HeroesComponent },
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ], { useHash: true })
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
}).Class({
    constructor: function AppModule() {
    }
})
