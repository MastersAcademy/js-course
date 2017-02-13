import { Component, OnInit } from '@angular/core';

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

  constructor(private heroService: HeroService) { }

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
}


