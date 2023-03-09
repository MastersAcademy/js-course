import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-edit',
    template: `
        <button (click)="openCloseEditDetail()">Open/Close edit form</button>

        <div *ngIf="hero" [hidden]="hidden">
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <div>
                <label>hero skill: </label>
                <input [(ngModel)]="hero.skill" placeholder="skill"/>
            </div>
        </div>
    `,
})

export class HeroEditComponent {
    @Input()
    hero: Hero;
    hidden: boolean = true;
    openCloseEditDetail() {
        this.hidden = !this.hidden;
    }
}
