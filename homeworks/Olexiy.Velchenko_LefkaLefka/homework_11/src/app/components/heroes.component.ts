import { Component, OnInit } from "@angular/core";
import { Router }            from "@angular/router";
import { Hero }              from "../modules/hero";
import { HeroService }       from "../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "my-heroes",
    templateUrl: "./app/templates/heroes.component.html",
    styleUrls: [ "./app/style/heroes.component.css" ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        let id = this.heroes.length + 1;
        const hero = {
            id: id,
            name: name,
            image: "",
            address: {
                street: "",
                city: "",
                state: "",
                zip: ""
            }
        };
        this.heroService.create(hero)
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

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(["/detail", this.selectedHero.id]);
    }
}