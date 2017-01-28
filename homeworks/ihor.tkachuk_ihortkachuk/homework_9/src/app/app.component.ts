import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
    image: string;
}

const HEROES: Hero[] = [
    {
        id: 1,
        name: 'Hulk',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_(comics_character).png'
    },
    {
        id: 2,
        name: 'Superman',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png'
    },
    {
        id: 3,
        name: 'Batman',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg'
    },
    {
        id: 4,
        name: 'Iron Man',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
    },
    {
        id: 5,
        name: 'Capitan America',
        image: 'http://vignette3.wikia.nocookie.net/marveldatabase/images/f/f0/Steven_Rogers_(Earth-1610).png/revision/latest?cb=20100205184014'
    },
    {
        id: 6,
        name: 'Green Lantern',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/f6/fd/e2/f6fde22f9571b81ac9d7ffcf580c2b87.jpg'
    },
    {
        id: 7,
        name: 'Thor',
        image: 'https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Thor_Modern.png?itok=ky_Xd0nm'
    }
];

@Component({
    selector: 'my-app',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
            <div>
                <label>id: </label>{{selectedHero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
            <img src="{{selectedHero.image}}" alt="{{selectedHero.name}}">
        </div>
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
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
  `]
})

export class AppComponent {
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
