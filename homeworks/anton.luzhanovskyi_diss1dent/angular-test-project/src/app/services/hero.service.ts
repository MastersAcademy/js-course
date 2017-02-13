import { Injectable } from '@angular/core';

import { Hero } from '../shared/hero';
import { HEROES } from '../data/mock-heroes';
import { BADHEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getBadHeroes(): Promise<Hero[]> {
        return Promise.resolve(BADHEROES);
    }
}
