'use strict';

var Component = require('@angular/core').Component
var HeroService = require('./hero.service')

module.exports = Component({
    selector: 'my-dashboard',
    template: require('./dashboard.component.html')
}).Class({
    constructor: [HeroService, function DashboardComponent(heroService) {
        this.heroService = heroService
        this.heroes = []
    }],
    ngOnInit: function() {
        var me = this
        this.heroService.getHeroes().then(function(heroes) {
            me.heroes = heroes.slice(1, 5)
        })
    }
})