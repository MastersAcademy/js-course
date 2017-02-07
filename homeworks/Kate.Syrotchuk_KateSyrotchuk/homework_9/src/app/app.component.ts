import { Component } from '@angular/core';
import {Hero} from "./hero";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 12, name: 'Narco', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 13, name: 'Bombasto', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 14, name: 'Celeritas', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 15, name: 'Magneta', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 16, name: 'RubberMan', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 17, name: 'Dynama', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 18, name: 'Dr IQ', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 19, name: 'Magma', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 20, name: 'Tornado', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" },
  { id: 20, name: 'Tornado2', image: "https://cdn.pixabay.com/photo/2016/07/13/18/48/face-1515193_150.jpg" }
];

// var heroes = HEROES;

@Component({
  selector: 'my-app',
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

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
