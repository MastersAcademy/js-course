import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
}                                            from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

import { HeroService } from '../shared/hero.service';
import { Hero }        from '../shared/hero.model';

@Component({
    selector: 'hero-value',
    templateUrl: 'hero-value.component.html',
    styleUrls: ['hero-value.component.css'],
    animations: [
        trigger('skill', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ opacity: '0' }))
            ])
        ])
    ]
})
export class HeroValueComponent implements OnInit {
    @Input() hero: Hero;
    @Output() heroUpdated = new EventEmitter();
    imgPreview: string;
    heroForm: FormGroup;
    heroes: Hero[];
    hidden = true;

    constructor(
        private heroService: HeroService,
        private fb: FormBuilder) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
        this.createForm(this.hero);
    }
    createForm(hero) {
        if (hero && hero.id) {
            this.heroForm = this.fb.group({
                name: hero.name,
                img: hero.img,
                skills: this.fb.array([])
            });
            this.setSkills(hero.skills);
        } else {
            this.hero = new Hero();
            this.heroForm = this.fb.group(this.hero);
            this.heroForm.setControl('skills', this.fb.array([]));
        }
    }
    setSkills(skills) {
        const skillsGr = skills.map(skill => this.fb.group({ skill: skill }));
        const skillsFormArray = this.fb.array(skillsGr);
        this.heroForm.setControl('skills', skillsFormArray);
    }
    get skills(): FormArray {
        return this.heroForm.get('skills') as FormArray;
    }
    addSkill(): void {
        this.skills.push(this.fb.group({ skill: '' }));
    }
    removeSkill(id): void {
        this.skills.controls.splice(id, 1);
        this.skills.value.splice(id, 1);
    }
    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;
        const skillsDeepCopy = formModel.skills ? formModel.skills.map((obj) => obj.skill) : [];

        let lastID = this.heroes.length ? this.heroes[this.heroes.length - 1].id : false;
        let nextID = lastID ? lastID + 1 : 1;
        let heroID = this.hero.id ? this.hero.id : nextID;

        const saveHero = {
            id: heroID,
            name: formModel.name as string,
            img: formModel.img as string,
            skills: skillsDeepCopy
        };
        return saveHero;
    }
    save() {
        const newHero = this.prepareSaveHero();
        if (this.hero.id) {
            this.heroService.update(newHero);
        } else {
            this.heroService.create(newHero)
                .then(hero => this.heroes.push(newHero));
            this.createForm(this.hero);
        }
        this.heroUpdated.emit(newHero);
        this.togglePopup();
    }
    reset() {
        this.togglePopup();
        setTimeout(() =>
            this.hero.id ? this.setSkills(this.hero.skills) : this.createForm(this.hero), 1000);
        this.heroForm.reset(this.hero);
    }
    togglePopup() {
        this.hidden = !this.hidden;
        this.imgPreview = '';
    }
    showPreview(img) {
        this.imgPreview = img.value;
    }
}
