import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    heroForm: FormGroup;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,
    ) {

    }

    createForm() {
        this.heroForm = this.fb.group({
             id: ['', Validators.required],
             name: ['', Validators.required],
             img: '',
        })
    }

    saveHero(){
        this.heroService.update(this.heroForm.value)
            .then(() => this.goBack());
    }

    ngOnInit(): void {

        this.createForm();
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => {
                this.hero = hero;
                this.heroForm = this.fb.group({
                    id: [this.hero.id, Validators.required],
                    name: [this.hero.name, Validators.required],
                    img: this.hero.img,
                })
            });
    }

    save(): void {
        console.log(this.hero);
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
