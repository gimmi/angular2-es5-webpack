'use strict';

var Component = require('@angular/core').Component

module.exports = Component({
  selector: 'my-hero-detail',
  inputs: [ 'hero' ],
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
    constructor: function HeroDetailComponent() {
    }
})

