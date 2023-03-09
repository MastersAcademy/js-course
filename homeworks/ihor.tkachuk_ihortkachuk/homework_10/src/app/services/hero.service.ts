import { Injectable } from '@angular/core';

import { Hero } from '../shared/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable()

export class HeroService {
    heroes = HEROES;

    getHeroes() {
        return this.heroes;
    }

    getHeroById(id: number) {
        return this.heroes.filter((item) => item.id === id).pop();
    }

    update(obj: Hero) {
        let hero = this.getHeroById(obj.id);
        Object.assign(hero, obj);
        return hero;
    }
}
