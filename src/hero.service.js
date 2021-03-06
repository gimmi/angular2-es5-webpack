'use strict';

var Injectable = require('@angular/core').Injectable

module.exports = Injectable().Class({
    constructor: function HeroService() {
        this.heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ]
    },
    getHeroes: function() {
        return Promise.resolve(this.heroes)
    },
    getHero: function(id) {
        var hero = this.heroes.find(function(x) { return x.id === id })
        return Promise.resolve(hero)
    }
})