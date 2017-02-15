import "rxjs/add/operator/switchMap";
import {Component, Input, OnInit} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HeroService } from "../services/hero.service";
import { Hero } from "../modules/hero";
import { states } from "../modules/address";

@Component({
    moduleId: module.id,
    selector: "my-hero-edit",
    templateUrl: "./app/templates/hero-edit.component.html",
    styleUrls: [ "./app/style/hero-edit.component.css" ]
})
export class HeroEditComponent implements OnInit {
    @Input() hero: Hero;

    heroForm: FormGroup;
    states = states;

    constructor(
                private heroService: HeroService,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) {
        this.createForm();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params["id"]))
            .subscribe(hero => {
                this.hero = hero;
                this.heroForm.setValue({
                    name: this.hero.name,
                    id: this.hero.id,
                    image: this.hero.image,
                    address: {
                        street: this.hero.address.street,
                        city: this.hero.address.city,
                        state: this.hero.address.state,
                        zip: this.hero.address.zip
                    }
                });
            });
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: "",
            id: "",
            image: "",
            address: this.fb.group({
                street: "",
                city: "",
                state: "",
                zip: ""
            })
        });
    }

    save(): void {
        this.heroService.update(this.heroForm.value)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.router.navigate(["/detail", this.hero.id]);
        // this.location.back();
    }
}