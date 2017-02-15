import "rxjs/add/operator/switchMap";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../services/hero.service";
import { Hero } from "../modules/hero";

@Component({
    moduleId: module.id,
    selector: "my-hero-detail",
    templateUrl: "./app/templates/hero-detail.component.html",
    styleUrls: [ "./app/style/hero-detail.component.css" ]
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
                private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params["id"]))
            .subscribe(hero => this.hero = hero);
    }

    goEdit(): void {
        this.router.navigate(["/edit", this.hero.id]);
    }

    goBack(): void {
        this.location.back();
    }
}