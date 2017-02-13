import { Component, OnInit }                  from '@angular/core';
import { ActivatedRoute, Params }             from '@angular/router';
import { Location }                           from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    form: FormGroup;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => {
                this.hero = hero;
                this.form.setValue({
                    id: this.hero.id,
                    name: this.hero.name,
                    image: this.hero.image
                });
            });
    }

    createForm() {
        this.form = this.fb.group({
            id: [''],
            name: ['', Validators.required],
            image: ['', Validators.required]
        });
    }

    save(): void {
        this.heroService.update(this.form.value)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}