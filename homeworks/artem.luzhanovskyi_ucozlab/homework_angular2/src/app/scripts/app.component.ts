import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: "my-app",
    template:`
        <main class="row">
            <div class="col-4">
                <h2>My Heroes</h2>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
            </div>
            <div class="col-8">
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            </div>
        </main>
        `,
    styles: [`
      main {
        width: 100%;
        max-width: 991px;
        margin: 30px auto;
      }
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
        padding: .3em 0 .3em 3em;
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
        line-height: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 4px 0 0 4px;
      }
    `],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    title = "Tour of Heroes";
    selectedHero: Hero;
    heroes: Hero[];

    constructor (private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then((heroes) => {
                this.heroes = heroes;
            });
    }

    onSelect = (hero:Hero) => {
        this.selectedHero = hero;
    }
}