import { Component } from "@angular/core";
import { Hero } from "../modules/hero";
import { HeroService } from "../services/hero.service"

@Component({
    selector: "my-app",
    template:
        `<h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes"> 
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
})
export class AppComponent {
    public title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}