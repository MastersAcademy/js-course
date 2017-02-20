import {
    Component,
    OnInit,
    state,
    trigger,
    style,
    transition,
    animate
} from '@angular/core';

import { HeroService } from '../shared/hero.service';
import { Hero }        from '../shared/hero.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    animations: [
        trigger('dash', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '.5' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ opacity: '0' }))
            ])
        ])
    ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
