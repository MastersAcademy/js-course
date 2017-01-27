"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var Bad = (function () {
    function Bad() {
    }
    return Bad;
}());
exports.Bad = Bad;
var HEROES = [
    { id: 1, name: 'Genji', photo: 'https://blzgdapipro-a.akamaihd.net/hero/genji/hero-select-portrait.png' },
    { id: 2, name: 'McCree', photo: 'https://blzgdapipro-a.akamaihd.net/hero/mccree/hero-select-portrait.png' },
    { id: 3, name: 'Pharah', photo: 'https://blzgdapipro-a.akamaihd.net/hero/pharah/hero-select-portrait.png' },
    { id: 4, name: 'Soldier: 76', photo: 'https://blzgdapipro-a.akamaihd.net/hero/soldier-76/hero-select-portrait.png' },
    { id: 5, name: 'Tracer', photo: 'https://blzgdapipro-a.akamaihd.net/hero/tracer/hero-select-portrait.png' },
    { id: 6, name: 'Bastion', photo: 'https://blzgdapipro-a.akamaihd.net/hero/bastion/hero-select-portrait.png' },
    { id: 7, name: 'Hanzo', photo: 'https://blzgdapipro-a.akamaihd.net/hero/hanzo/hero-select-portrait.png' },
    { id: 8, name: 'Mei', photo: 'https://blzgdapipro-a.akamaihd.net/hero/mei/hero-select-portrait.png' },
    { id: 9, name: 'Torbjörn', photo: 'https://blzgdapipro-a.akamaihd.net/hero/torbjorn/hero-select-portrait.png' },
    { id: 10, name: 'D.VA', photo: 'https://blzgdapipro-a.akamaihd.net/hero/dva/hero-select-portrait.png' }
];
var BAD = [
    { id: 1, name: 'Reaper', photo: 'https://blzgdapipro-a.akamaihd.net/hero/reaper/hero-select-portrait.png' },
    { id: 2, name: 'Sombra', photo: 'https://blzgdapipro-a.akamaihd.net/hero/sombra/hero-select-portrait.png' },
    { id: 3, name: 'Junkrat', photo: 'https://blzgdapipro-a.akamaihd.net/hero/junkrat/hero-select-portrait.png' },
    { id: 4, name: 'Roudhog', photo: 'https://blzgdapipro-a.akamaihd.net/hero/roadhog/hero-select-portrait.png' },
    { id: 5, name: 'Symmetra', photo: 'https://blzgdapipro-a.akamaihd.net/hero/symmetra/hero-select-portrait.png' },
    { id: 6, name: 'Widow', photo: 'https://blzgdapipro-a.akamaihd.net/hero/widowmaker/hero-select-portrait.png' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tavern of Heroes';
        this.heroes = HEROES;
        this.bad = BAD;
    }
    AppComponent.prototype.onSelectHero = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.onSelectBad = function (bad) {
        this.selectedBad = bad;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <h2 class='h'>Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\"\n (click)=\"onSelectHero(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n\n  <h2 class='bg'>Bad guys</h2>\n  <ul class=\"bad\">\n    <li *ngFor=\"let bad of bad\" [class.selected]=\"bad === selectedBad\"\n (click)=\"onSelectBad(bad)\">\n      <span class=\"badge\">{{bad.id}}</span> {{bad.name}}\n    </li>\n  </ul>\n\n\n  <div class='hero_info' *ngIf=\"selectedHero\">\n    <h2>{{selectedHero.name}} details!</h2>\n    <div><img [src]=\"selectedHero.photo\"></div>\n    <div><label>id: </label>{{selectedHero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n\n  <div class='bad_info' *ngIf=\"selectedBad\">\n    <h2>{{selectedBad.name}} details!</h2>\n    <div><img [src]=\"selectedBad.photo\"></div>\n    <div><label>id: </label>{{selectedBad.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedBad.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  ",
            styles: ["\n  .bad_info {\n    position: absolute;\n    left: 825px;\n    top: 140px;\n    border: 2px solid #cf000a;\n    border-radius: 5px;\n    width: 225px;\n    padding: 10px;\n  }\n  .hero_info {\n    position: absolute;\n    left: 550px;\n    top: 140px;\n    border: 2px solid #607D8B;\n    border-radius: 5px;\n    width: 225px;\n    padding: 10px;\n  }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  h2 {\n    display: inline;\n  }\n  .h {\n    margin-left: 80px;\n  }\n  .bg {\n    position: absolute;\n    top: 85px;\n    left: 340px\n  }\n  .bad {\n    position: absolute;\n    left: 270px;\n    top: 116px;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .bad li {\n    cursor: pointer;\n    position: relative;\n    margin-top: -100%;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n  }\n  .bad li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .bad li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .bad .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  .bad .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #cf000a;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map