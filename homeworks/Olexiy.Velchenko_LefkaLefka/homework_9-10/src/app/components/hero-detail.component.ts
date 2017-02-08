import {Component, Input} from "@angular/core";
import { Hero } from "../modules/hero";

@Component({
    selector: "my-hero-detail",
    template:
        `<div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <div>
                <label>Skills: </label>
                <input [(ngModel)]="hero.skills" placeholder="skills"/>
            </div>
            <div>   
                <p>{{hero.name}}'s photo:</p>
                <img src="{{hero.image}}" alt="{{hero.name}}">
            </div>
        </div>`
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}