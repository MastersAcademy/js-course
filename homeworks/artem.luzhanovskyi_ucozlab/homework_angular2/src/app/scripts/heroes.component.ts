import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: "my-heroes",
    template:`
        <div class="row">
            <div class="col-4">
                <h2>My Heroes</h2>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
            </div>
            <div class="col-8">
                <div *ngIf="selectedHero">
                    <h2>
                        {{selectedHero.name | uppercase}} is my hero
                    </h2>
                    <button class="btn" (click)="gotoDetail()">View Details</button>
                </div>
            </div>
        </div>
        `
})

export class HeroesComponent implements OnInit {
    title = "Tour of Heroes";
    selectedHero: Hero;
    heroes: Hero[];

    constructor (
        private router: Router,
        private heroService: HeroService
    ) {}

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

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}