import { Injectable } from "@angular/core";
import { HEROES } from "../modules/mock-heroes";
import { Hero } from "../modules/hero";

@Injectable()
export class HeroService {
    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() : Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(this.getHeroes()), 5000) // 2 seconds
        );
    }
}