import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
    selector: 'my-hero-editing',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>
                <input [(ngModel)]="hero.id" placeholder="id"/>
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <div>
                <label>skill: </label>
                <input [(ngModel)]="hero.skill" placeholder="skill"/>
            </div>
            <img name = 'img' src = '{{hero.avatar}}' alt = 'Heroes Avatar'/>
        </div>
    `
})
export class HeroEditingComponent {
    @Input()
    hero: Hero;
}
