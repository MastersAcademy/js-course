import { Component,Input, OnInit, OnChanges  } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.css']
})

export class HeroEditComponent implements OnInit, OnChanges {
    @Input() hero: Hero;
    antiheroes: string[];
    heroForm: FormGroup;
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder) {
    }  
    
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
     
        this.hero = {id: 20, name: 'Tornado', photo: "src/images/Tornado.jpg", antihero: "John Constantine" };
        this.getAntiheroes();
        this.createForm();
    }
    
    createForm() {
        this.heroForm = this.fb.group({
            id: this.hero.id,
            name: [this.hero.name, Validators.required],
            photo: [this.hero.photo, Validators.required],
            antihero: this.hero.antihero
        });
    }
    
    ngOnChanges() {
        this.heroForm.reset({
            id: this.hero.id,
            name: this.hero.name,
            photo: this.hero.photo,
            antihero: this.hero.antihero
        });
    }
    
    onSubmit() {
        this.hero = this.prepareSaveHero();
        this.save();
        this.ngOnChanges();
    }
      
    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;
        const saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            photo: formModel.photo as string,
            antihero: formModel.antihero as string
        };
        return saveHero;
    }
    
    revert() { 
        this.ngOnChanges(); 
    }
    
    getAntiheroes(): void {
        this.heroService.getAntiheroes().then(antiheroes => 
            this.antiheroes = antiheroes);
    }

    clearPhoto(event: any) {
        event.preventDefault();
        this.hero.photo = '';
    }
    
    goBack(): void {
        this.location.back();
    }
    
    save(): void {
        this.heroService
            .update(this.hero)
            .then(() => this.goBack());
    }
}