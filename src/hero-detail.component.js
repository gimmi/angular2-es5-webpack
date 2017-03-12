'use strict';

var Component = require('@angular/core').Component
var ActivatedRoute = require('@angular/router').ActivatedRoute
var HeroService = require('./hero.service')

module.exports = Component({
  selector: 'my-hero-detail',
  template: [
    '<div *ngIf="hero">',
    '  <h2>{{hero.name}} details!</h2>',
    '  <div><label>id:</label> {{hero.id}}</div>',
    '  <div>',
    '    <div><label>name:</label>',
    '    <input [(ngModel)]="hero.name" placeholder="name">',
    '  </div>',
    '</div>'
  ].join(''),
}).Class({
    constructor: [HeroService, ActivatedRoute, function HeroDetailComponent(heroService, activatedRoute) {
        this.heroService = heroService
        this.activatedRoute = activatedRoute
        this.hero = null
    }],
    ngOnInit: function() {
        var me = this
        this.activatedRoute.params.switchMap(function(params) {
            var id = Number(params.id)
            return me.heroService.getHero(id)
        }).subscribe(function(hero) {
            me.hero = hero
        })
    }
})

