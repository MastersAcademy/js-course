import { Component, Input } from '@angular/core';
import { Hero } from '../../shared/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.my-hero-detail.html',
    styleUrls: ['./hero-detail.my-hero-detail.css'],
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}