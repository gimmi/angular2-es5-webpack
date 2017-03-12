'use strict';

var Component = require('@angular/core').Component
var HeroService = require('./hero.service')

module.exports = Component({
  selector: 'my-heroes',
  styles: [
    'ul { list-style-type: none; }',
    'li { cursor: pointer; }',
    '.selected { background-color: #DDD; }'
  ],
  template: require('./heroes.component.html')
}).Class({
    constructor: [HeroService, function HeroesComponent(heroService) {
        this.heroService = heroService
        this.heroes = []
        this.selectedHero = null
    }],
    ngOnInit: function() {
        var me = this
        this.heroService.getHeroes().then(function(heroes) {
            me.heroes = heroes
        })
    },
    onSelect: function(hero) {
        this.selectedHero = hero;
    }
})

