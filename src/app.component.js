'use strict';

var Component = require('@angular/core').Component

module.exports = Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1>',
}).Class({
	constructor: function AppComponent() {
		this.name = 'Angular'
	}
})

