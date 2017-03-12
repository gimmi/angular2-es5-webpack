'use strict';

var NgModule = require('@angular/core').NgModule
var RouterModule = require('@angular/router').RouterModule

var HeroesComponent = require('./heroes.component')
var HeroDetailComponent = require('./hero-detail.component')
var DashboardComponent = require('./dashboard.component')

var routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

module.exports = NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
}).Class({
    constructor: function AppRoutingModule() {
    }
})
