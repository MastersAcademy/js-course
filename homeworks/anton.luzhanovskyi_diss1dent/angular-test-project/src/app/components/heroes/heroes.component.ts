import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.tour-of-heroes.html',
  styleUrls: ['./heroes.tour-of-heroes.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  badheroes : Hero[];
  selectedHero: Hero;

  constructor(
      private router: Router,
      private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getBadHeroes(): void {
    this.heroService.getBadHeroes().then(badheroes => this.badheroes = badheroes);
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getBadHeroes();
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


