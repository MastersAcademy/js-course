import { Component, OnInit } from '@angular/core';

import { Hero }      from './shared/hero';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'hero-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    editHero: Hero;

    constructor(private heroService: HeroService) {}

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.editHero = null;
        this.selectedHero = hero;
    }

    onEdit(hero: Hero): void {
        this.selectedHero = null;
        this.editHero = hero;
    }

    clear() {
        this.selectedHero = null;
        this.editHero = null;
    }
}
