import { Component } from '@angular/core';

@Component({
  selector: 'tour-of-heroes',
  templateUrl: './app.tour-of-heroes.html',
  styleUrls: ['./app.tour-of-heroes.css'],
})

export class AppComponent {
  title = `Tour of Heroes`;
  selectedHero: Hero;
  heroes = HEROES;
  badheroes = BADHEROES;

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', img: 'https://upload.wikimedia.org/wikipedia/en/7/79/Mr._Nice.jpg' },
  { id: 12, name: 'Narco', img: 'https://s-media-cache-ak0.pinimg.com/236x/cb/1e/21/cb1e217af38d3c8e6658ff0322fca52b.jpg' },
  { id: 13, name: 'Bombasto', img: 'https://hydra-media.cursecdn.com/solsticearena.gamepedia.com/thumb/2/2e/Portrait_bombast.png/225px-Portrait_bombast.png?version=5684639074fe5ec7f58083d0b9e1e04e'},
  { id: 14, name: 'Celeritas', img: 'http://www.cardiacathletes.com/images/superheroes/superhero-3.png' },
  { id: 15, name: 'Magneta', img: 'http://vignette4.wikia.nocookie.net/marveldatabase/images/f/fd/MC2_Magneta.png/revision/latest?cb=20120409045056' },
  { id: 16, name: 'RubberMan', img: 'http://images.buycostumes.com/mgen/merchandiser/802980.jpg?zm=1600,1600,1,0,0' },
  { id: 17, name: 'Dynama', img: 'http://orig10.deviantart.net/ad33/f/2008/275/7/6/dynamo_via_hero_creator_by_gwhitmore.png' },
  { id: 18, name: 'Dr IQ', img: 'http://dresdencodak.com/images/costume/drstrange' },
  { id: 19, name: 'Magma', img: 'http://1.bp.blogspot.com/-3kcOLFqmjfg/VHavDweTvqI/AAAAAAAABJ0/TWUql7iB-1o/s1600/279.png' },
  { id: 20, name: 'Tornado', img: 'http://i283.photobucket.com/albums/kk286/skarth7/Renders/GreatTornado.png' }
];

const BADHEROES: Hero[] = [
  { id: 211, name: 'Ultron', img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/03/537bc76411307/standard_xlarge.jpg'  },
  { id: 212, name: 'Loki', img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/03/537bc76411307/standard_xlarge.jpg'  },
  { id: 213, name: 'Red Skull' , img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/03/526036550cd37/standard_xlarge.jpg'},
  { id: 214, name: 'Mystique', img: 'https://i.annihil.us/u/prod/marvel/i/mg/5/03/5390dc2225782/standard_xlarge.jpg' },
  { id: 215, name: 'Thanos', img: 'https://i.annihil.us/u/prod/marvel/i/mg/a/10/537bc68747ccf/standard_xlarge.jpg' },
  { id: 216, name: 'Ronan', img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/f0/5260363fc40f2/standard_xlarge.jpg' },
  { id: 217, name: 'Magneto', img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827/standard_xlarge.jpg' },
  { id: 218, name: 'Dr. Doom', img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/60/53176bb096d17/standard_xlarge.jpg' },
  { id: 219, name: 'Green Goblin', img: 'https://i.annihil.us/u/prod/marvel/i/mg/f/40/538cf0c2acdd9/standard_xlarge.jpg' },
  { id: 220, name: 'Black Cat', img: 'https://i.annihil.us/u/prod/marvel/i/mg/e/03/526952357d91c/standard_xlarge.jpg' }
];

export class Hero {
  id: number;
  name: string;
  img: string;
}