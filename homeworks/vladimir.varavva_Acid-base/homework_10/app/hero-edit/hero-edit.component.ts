import { Component, Input } from '@angular/core';

import { Hero } from '../shared/hero';

@Component({
    selector: 'hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.css']
})
export class HeroEditComponent {
    hidden = true;
    @Input()
    hero: Hero;

    togglePopup() {
        this.hidden = !this.hidden;
    }
}
