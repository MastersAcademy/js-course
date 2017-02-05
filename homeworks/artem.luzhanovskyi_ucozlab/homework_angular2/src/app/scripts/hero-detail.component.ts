import { Component, Input, OnChanges } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: "my-hero-detail",
    template: `
        <div *ngIf="hero" class="row">
            <div class="col-6">
                <h2>Hero details</h2>
                <p>
                    <img [src]="hero.image" alt="{{hero.name}}">
                </p>
                <div><label>id: </label> {{hero.id}}</div>
                <div><label>name: </label> {{hero.name}}</div>
                <div><label>age: </label> {{hero.age}}</div>
                <div><label>skill: </label> {{hero.skill}}</div>
                <div>
                    <button type="button" (click)="allowEdit(true)" class="btn btn-info">Edit</button>
                </div>
            </div>
            <div class="col-6">
                <my-hero-edit [hero]="hero" [canEdit]="canEdit" (allowEdit)="allowEdit($event)"></my-hero-edit>
            </div>
        </div>
        `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
    canEdit: boolean = false;

    ngOnChanges() {
        console.log(this.hero);
    }

    allowEdit(condition:boolean) {
        this.canEdit = condition;
    }

}