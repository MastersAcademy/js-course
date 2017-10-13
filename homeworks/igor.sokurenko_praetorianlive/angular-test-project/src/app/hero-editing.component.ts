import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService }  from './hero.service';
import { Hero }         from './hero';
import 'rxjs/add/operator/switchMap';
import { FormGroup,  Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-hero-editing',
    templateUrl: './hero-editing.component.html'

})
export class HeroEditingComponent {
    heroForm: FormGroup; 
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder
    ) {}
    ngOnInit(): void {
        this.createForm();
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => {
                this.hero = hero;
                this.heroForm = this.fb.group({
                    id: this.hero.id,
                    name: this.hero.name,
                    skill: this.hero.skill,
                    avatar: this.hero.avatar
                });
        
            });
    }
    
    createForm() {
        this.heroForm = this.fb.group({
            id: '',
            name: ['', Validators.required],
            skill: '',
            avatar: ''
        });
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        let formModel = this.heroForm.value;
        let saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            skill: formModel.skill as string, 
            avatar: this.hero.avatar
        };
        this.heroService
            .update(saveHero)
            .then(() => this.goBack());
    }
}
