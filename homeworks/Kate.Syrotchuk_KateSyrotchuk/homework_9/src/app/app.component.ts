import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {Hero} from "./hero";
import { HeroService } from './hero.service';

// var heroes = HEROES;

@Component({
  selector: 'my-app',
  providers: [HeroService],
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    <img src="{{hero.image}}" alt="hero face" class="img-hero">
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em;
    padding-left: 0;
    height: 2.1em;
    border-radius: 4px;
    clear: right;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
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
    height: 2.4em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .heroes .img-hero {
    width: 30px;
    height: auto;
    float: right;
  }
`]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
