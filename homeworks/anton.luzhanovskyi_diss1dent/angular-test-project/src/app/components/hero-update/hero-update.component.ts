import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../shared/hero';

@Component({
    selector: 'my-hero-update',
    templateUrl: './hero-update.my-hero-update.html',
    styleUrls: ['./hero-update.my-hero-update.css'],
})

export class HeroUpdateComponent {
    @Input() hero: Hero;
    @Output() onUpdate = new EventEmitter<any>();

    edited = false;

    onSave() {
        this.onUpdate.emit(true);
        this.edited = true;
    }
}

