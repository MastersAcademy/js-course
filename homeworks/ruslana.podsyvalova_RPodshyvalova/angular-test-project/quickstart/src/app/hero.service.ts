import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES, ANTIHEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    
    getAntiheroes(): Promise<string[]> {
        return Promise.resolve(ANTIHEROES);
    }
    
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}