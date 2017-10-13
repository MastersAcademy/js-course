import { Component, OnInit } from "@angular/core";
import { Hero }              from "../modules/hero";
import { HeroService }       from "../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "my-dashboard",
    templateUrl: "./app/templates/dashboard.component.html",
    styleUrls: [ "./app/style/dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}