import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  photo: string;
}

export class Bad {
  id: number;
  name: string;
  photo: string;
}

const HEROES: Hero[] = [
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

const BAD: Bad[] = [
  { id: 1, name: 'Reaper', photo: 'https://blzgdapipro-a.akamaihd.net/hero/reaper/hero-select-portrait.png' },
  { id: 2, name: 'Sombra', photo: 'https://blzgdapipro-a.akamaihd.net/hero/sombra/hero-select-portrait.png' },
  { id: 3, name: 'Junkrat', photo: 'https://blzgdapipro-a.akamaihd.net/hero/junkrat/hero-select-portrait.png' },
  { id: 4, name: 'Roudhog', photo: 'https://blzgdapipro-a.akamaihd.net/hero/roadhog/hero-select-portrait.png' },
  { id: 5, name: 'Symmetra', photo: 'https://blzgdapipro-a.akamaihd.net/hero/symmetra/hero-select-portrait.png' },
  { id: 6, name: 'Widow', photo: 'https://blzgdapipro-a.akamaihd.net/hero/widowmaker/hero-select-portrait.png' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2 class='h'>Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero"
 (click)="onSelectHero(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <h2 class='bg'>Bad guys</h2>
  <ul class="bad">
    <li *ngFor="let bad of bad" [class.selected]="bad === selectedBad"
 (click)="onSelectBad(bad)">
      <span class="badge">{{bad.id}}</span> {{bad.name}}
    </li>
  </ul>


  <div class='hero_info' *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><img [src]="selectedHero.photo"></div>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>

  <div class='bad_info' *ngIf="selectedBad">
    <h2>{{selectedBad.name}} details!</h2>
    <div><img [src]="selectedBad.photo"></div>
    <div><label>id: </label>{{selectedBad.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedBad.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  .bad_info {
    position: absolute;
    left: 825px;
    top: 140px;
    border: 2px solid #cf000a;
    border-radius: 5px;
    width: 225px;
    padding: 10px;
  }
  .hero_info {
    position: absolute;
    left: 550px;
    top: 140px;
    border: 2px solid #607D8B;
    border-radius: 5px;
    width: 225px;
    padding: 10px;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  h2 {
    display: inline;
  }
  .h {
    margin-left: 80px;
  }
  .bg {
    position: absolute;
    top: 85px;
    left: 340px
  }
  .bad {
    position: absolute;
    left: 270px;
    top: 116px;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .bad li {
    cursor: pointer;
    position: relative;
    margin-top: -100%;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
  }
  .bad li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .bad li:hover {
    color: #607D8B;
    background-color: #DDD;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .bad .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .bad .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #cf000a;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
  title = 'Tavern of Heroes';
  heroes = HEROES;
  bad = BAD;
  selectedHero: Hero;
  selectedBad: Bad;
  onSelectHero(hero: Hero): void {
  this.selectedHero = hero;
}
  onSelectBad(bad: Bad): void {
    this.selectedBad = bad;
  }
  };
