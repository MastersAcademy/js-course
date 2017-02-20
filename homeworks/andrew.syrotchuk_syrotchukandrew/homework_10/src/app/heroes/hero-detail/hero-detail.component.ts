import 'rxjs/add/operator/switchMap';
import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
    moduleId: module.id,
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
    hero: Hero;
    heroForm: FormGroup;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    ngOnChanges() {
        this.heroForm.reset({
            name: this.hero.name,
        });
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ''
        });
    }

    onSubmit() {
        this.hero = this.prepareSaveHero();
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    revert() { this.ngOnChanges(); }

    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;

        const savedHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
        };
        return savedHero;
    }

    goBack(): void {
        this.location.back();
    }
}
