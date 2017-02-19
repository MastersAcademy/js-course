import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
}                 from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../shared/hero.service';
import { Hero }        from '../shared/hero.model';

@Component({
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    animations: [
        trigger('hero', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(300, style({ opacity: '0' }))
            ])
        ])
    ]
})
export class HeroesComponent implements OnInit {
    hero: Hero;
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                let index = this.heroes.indexOf(hero);
                this.heroes.splice(index, 1);
                this.selectedHero = null;
            });
    }
    heroesUpdate(hero) {
        this.heroes.push(hero);
    }
}
