import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
    selector: "my-hero-edit",
    template: `
        <div *ngIf="canEdit">
            <h2>Hero edit</h2>
            <p>
                <label>image: </label>
                <input [(ngModel)]="hero.image" placeholder="image"/>
            </p>
            <p>
                <label>id: </label>
                <input type="number" [(ngModel)]="hero.id" placeholder="id"/>
            </p>
            <p>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </p
            ><p>
                <label>age: </label>
                <input type="number" [(ngModel)]="hero.age" placeholder="age"/>
            </p>
            <p>
                <label>skill: </label>
                <input [(ngModel)]="hero.skill" placeholder="skill"/>
            </p>
            <div>
                <button type="button" (click)="saveHero()" class="btn btn-success">Save</button>
            </div>
            <!--<div>-->
                <!--<button class="btn btn-danger" (click)="delete(hero); $event.stopPropagation()">Delete</button>-->
            <!--</div>-->
        </div>
        `
})

export class HeroEditComponent {
    @Input()
    hero: Hero;
    @Input()
    canEdit: boolean;

    @Output() allowEdit = new EventEmitter<boolean>();
    @Output() goBack    = new EventEmitter<boolean>();

    constructor(
        private heroService: HeroService
    ) {}

    saveHero() {
        this.allowEdit.emit(false);
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack.emit());
    }
}
