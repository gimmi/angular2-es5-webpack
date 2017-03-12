'use strict';

var Component = require('@angular/core').Component

module.exports = Component({
  selector: 'my-app',
  template: [
    '<h1>{{title}}</h1>',
    '<nav>',
    '  <a routerLink="/dashboard">Dashboard</a>',
    '  <a routerLink="/heroes">Heroes</a>',
    '</nav>',
    '<router-outlet></router-outlet>'
  ].join('')
}).Class({
    constructor: function AppComponent() {
        this.title = 'Tour of Heroes'
    }
})

