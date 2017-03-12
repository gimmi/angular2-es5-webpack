'use strict';

var Component = require('@angular/core').Component
var HeroService = require('./hero.service')

module.exports = Component({
  selector: 'my-app',
  styles: [
    'ul { list-style-type: none; }',
    'li { cursor: pointer; }',
    '.selected { background-color: #DDD; }'
  ],
  template: [
    '<h1>{{title}}</h1>',
    '<h2>My Heroes</h2>',
    '<ul>',
    '  <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">',
    '    <span>{{hero.id}}</span> {{hero.name}}',
    '  </li>',
    '</ul>',
    '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
  ].join('')
}).Class({
    constructor: [HeroService, function AppComponent(heroService) {
        this.heroService = heroService
        this.title = 'Tour of Heroes'
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

