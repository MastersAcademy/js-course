import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from '../../shared/hero';
import { HeroService }  from '../../services/hero.service';

@Component({
    //moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.my-hero-detail.html',
    styleUrls: ['./hero-detail.my-hero-detail.css'],
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
