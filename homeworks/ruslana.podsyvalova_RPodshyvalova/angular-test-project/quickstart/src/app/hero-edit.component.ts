import { Component,Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.css']
})

export class HeroEditComponent {
    @Input() hero: Hero;
    antiheroes: string[];
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) {
    }  
    
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
        this.getAntiheroes();
    }
    
    getAntiheroes(): void {
        this.heroService.getAntiheroes().then(antiheroes => this.antiheroes = antiheroes);
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