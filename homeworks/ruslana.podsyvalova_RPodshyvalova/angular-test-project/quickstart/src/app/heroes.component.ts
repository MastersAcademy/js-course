import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    //moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
   
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }
    
    ngOnInit(): void {
        this.getHeroes();
    }
    
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onShowDetails(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }  
    
    gotoEditDetail(): void {
        this.router.navigate(['/edit', this.selectedHero.id]);
    }  
}