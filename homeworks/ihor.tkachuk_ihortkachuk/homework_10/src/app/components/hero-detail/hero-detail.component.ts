import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                         from '@angular/common';

import { Hero }        from '../../shared/hero';
import { HeroService } from '../../services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private router: Router,
                private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    gotoEdit(): void {
        this.router.navigate(['/edit', this.hero.id]);
    }

    goBack(): void {
        this.location.back();
    }
}
