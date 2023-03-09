import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
    photo: string;
}

const PATH_TO_IMAGES = 'src/images/';
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice', photo: PATH_TO_IMAGES  +"Nice.jpg" },
    { id: 12, name: 'Narco', photo: PATH_TO_IMAGES  +"Narco.jpg" },
    { id: 13, name: 'Bombasto', photo: PATH_TO_IMAGES  +"Bombasto.jpg" },
    { id: 14, name: 'Celeritas', photo: PATH_TO_IMAGES +"Celeritas.jpg" },
    { id: 15, name: 'Magneta', photo: PATH_TO_IMAGES  +"Magneta.jpg" },
    { id: 16, name: 'RubberMan', photo: PATH_TO_IMAGES +"RubberMan.jpg" },
    { id: 17, name: 'Dynama', photo: PATH_TO_IMAGES +"Dynama.jpg" },
    { id: 18, name: 'Dr IQ', photo: PATH_TO_IMAGES + "DrIQ.jpg" },
    { id: 19, name: 'Magma', photo: PATH_TO_IMAGES + "Magma.jpg" },
    { id: 20, name: 'Tornado', photo: PATH_TO_IMAGES + "Tornado.jpg" }
];

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}