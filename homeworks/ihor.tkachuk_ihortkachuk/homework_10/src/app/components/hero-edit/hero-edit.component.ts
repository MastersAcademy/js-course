import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero }             from '../../shared/hero';
import { HeroService }      from '../../services/hero.service';

@Component({
    selector: 'hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.scss']
})

export class HeroEditComponent {
    @Input() hero: Hero;
    @Output() save = new EventEmitter();

    constructor(private heroService: HeroService) {}

    onSubmit(formValue: Hero): void {
        this.heroService.update(formValue);
        this.save.emit();
    }
}