import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }        from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
        console.log(this.hero); // returns undefined
    }

    goBack(): void {
        this.location.back();
    }
}