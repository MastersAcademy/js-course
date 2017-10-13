import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HeroService } from './hero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states } from "./hero";

@Component({
    selector: "my-hero-edit",
    templateUrl: "./hero-edit.component.html"
})

export class HeroEditComponent {
    @Input()
    hero: Hero;
    @Input()
    canEdit: boolean;

    heroForm: FormGroup; // <--- heroForm is of type FormGroup
    states = states;

    @Output() allowEdit = new EventEmitter<boolean>();
    @Output() goBack    = new EventEmitter<boolean>();

    constructor(
        private fb: FormBuilder,
        private heroService: HeroService
    ) { // <--- inject FormBuilder

    }

    ngOnInit () {
        this.createForm();
    }

    createForm() {
        this.heroForm = this.fb.group({ // <-- the parent FormGroup
            id: this.hero.id,
            name: [this.hero.name, Validators.required ],
            image: this.hero.image,
            age: this.hero.age,
            skill: this.hero.skill,
            // addresses: ''
        });

    }

    saveHero() {
        this.allowEdit.emit(false);
    }
    save(): void {
        console.log(this.hero);
        this.heroService.update(this.hero)
            .then(() => this.goBack.emit());
    }
}