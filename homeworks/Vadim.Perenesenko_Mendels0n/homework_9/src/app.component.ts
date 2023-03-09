import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  img:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Iron Man', img:'http://vignette1.wikia.nocookie.net/marveldatabase/images/e/e0/Iron_Man_bleeding_edge.jpg/revision/latest?cb=20111112004504' },
  { id: 12, name: 'Thor', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Thor_(Marvel_Comics).jpg/250px-Thor_(Marvel_Comics).jpg' },
  { id: 13, name: 'Hulk', img:'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_(comics_character).png' },
  { id: 14, name: 'Captain America', img:'https://i.annihil.us/u/prod/marvel//universe3zx/images/0/0d/MikeFichera--Cap-Classic-red-white-blue.jpg' },
  { id: 15, name: 'Magneta', img:'https://upload.wikimedia.org/wikipedia/ru/6/67/%D0%9C%D0%B0%D0%B3%D0%BD%D0%B5%D1%82%D0%BE_X-Men_%28Marvel_Comics%29.jpg' },
  { id: 16, name: 'RubberMan', img:'http://static.tvtropes.org/pmwiki/pub/images/prof_impossible_7699.png' },
  { id: 17, name: 'Dynama', img:'http://www.majorspoilers.com/wp-content/uploads/2009/12/DY1.jpg' },
  { id: 18, name: 'Dr IQ', img:'https://s-media-cache-ak0.pinimg.com/736x/4d/4b/87/4d4b8785ce988044f5ec762ddcfea1e9.jpg' },
  { id: 19, name: 'Magma', img:'https://s-media-cache-ak0.pinimg.com/564x/6a/80/0e/6a800e271532f97527cf11c8236aec4d.jpg' },
  { id: 20, name: 'Tornado', img:'http://static1.comicvine.com/uploads/original/11115/111150670/5466873-red+tornado.jpg' }
];
const VIllAINS: Hero[] = [
  { id: 21, name: 'Ultron', img:'https://upload.wikimedia.org/wikipedia/en/4/4f/Ultron2013.jpg' },
  { id: 22, name: 'Dark Phoenix', img:'https://s-media-cache-ak0.pinimg.com/236x/3e/67/ed/3e67edcb54dacf5453f5dc4330ef19ee.jpg' },
  { id: 23, name: 'Thanos', img:'https://upload.wikimedia.org/wikipedia/en/e/e4/ThanosAvengersAssemble.jpg' },
  { id: 24, name: 'Vulcan', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8d/X-Men_-_Kingbreaker_Low_Res.jpg/200px-X-Men_-_Kingbreaker_Low_Res.jpg' },
  { id: 25, name: 'Galactus', img:'https://qph.ec.quoracdn.net/main-qimg-3c9ff9fde0e4d50320f29156b8078126' },
  { id: 26, name: 'The Beyonder', img:'http://static.comicvine.com/uploads/original/14/144443/3269906-6311292795-Beyon.jpg' },
  { id: 27, name: 'Annihilus', img:'http://www.writeups.org/wp-content/uploads/Annihilus-Marvel-Comics-Fantastic-Four-b.jpg' },
  { id: 28, name: 'Apocalypse', img:'https://upload.wikimedia.org/wikipedia/en/4/48/Apocmessiahwar1.png' },
  { id: 29, name: 'Magus', img:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Themagusoriginal.png/220px-Themagusoriginal.png' },
  { id: 30, name: 'Doctor Doom', img:'http://www.strangearts.ru/sites/default/files/styles/heroes_main_picture/public/heroes/catalog/images/victor_von_doom_earth-616_from_thor_vol_1_600.jpg?itok=auJukuUS' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:  ['app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  villains = VIllAINS;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

