import { Component, Input } from '@angular/core';
import { Hero } from './app.hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app.hero-detail.component.html',
    styleUrls: ['app.hero-detail.component.css']
})

export class HeroDetailComponent {
    @Input() hero: Hero;    
}
