import {Component,Input, OnInit} from '@angular/core';
import { Hero } from './app.hero';

@Component({
    selector: 'my-hero-edit',
    templateUrl: 'app.hero-edit.component.html',
    styleUrls: ['app.hero-edit.component.css']
})

export class HeroEditComponent {
    @Input() hero: Hero;
    @Input() antiheroesList: string[];
    
    clearPhoto(event: any) {
        event.preventDefault();
        this.hero.photo = '';
    }
}