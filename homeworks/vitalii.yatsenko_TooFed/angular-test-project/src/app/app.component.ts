import { Component } from '@angular/core';

const HEROES: Hero[] = [
	{ id: 11, name: 'Flash', image: 'https://s-media-cache-ak0.pinimg.com/564x/85/74/d0/8574d06d28de8be754aa736adbd954b3.jpg' },
	{ id: 12, name: 'Arrow' , image: 'http://ep.yimg.com/ay/stylinonline/green-arrow-face-t-shirt-13.jpg'},
	{ id: 13, name: 'Superman', image: 'https://s-media-cache-ak0.pinimg.com/564x/b4/80/e3/b480e3024ae72b1eedf09c96285c551b.jpg' },
	{ id: 14, name: 'Batman', image: 'http://images.shirts.com/products/28908/14-14-57496/batman-cartoon-face-alt-1.jpg' },
	{ id: 15, name: 'Green lantern', image: 'http://img13.deviantart.net/7ba3/i/2014/028/b/6/green_lantern_drawing_by_nealadams-d4ltl7s.jpg' },
	{ id: 16, name: 'Wonder Woman', image: 'http://www.clipartkid.com/images/70/wonder-woman-emblem-clipart-best-lcfVfF-clipart.jpeg' },
	{ id: 17, name: 'Martian Manhunter', image: 'https://s-media-cache-ak0.pinimg.com/236x/90/79/a1/9079a1595cbf057f08b539bf23ccb5df.jpg' },
	{ id: 18, name: 'Hawkgirl', image: 'http://img08.deviantart.net/94ff/i/2013/113/f/e/hawkgirl_by_yamelme-d62pk0e.jpg' },
	{ id: 19, name: 'Aquaman', image: 'https://s-media-cache-ak0.pinimg.com/564x/94/ee/1d/94ee1d2147723f7827da241fdb7ce8be.jpg' },
	{ id: 20, name: 'Cyborg', image: 'https://imgs-tuts-dragoart-386112.c.cdn77.org/how-to-draw-cyborg-easy_1_000000021098_5.png' }
];

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes"
  			[class.selected]="hero === selectedHero"
  			(click)="onSelect(hero)">
  				<span class="badge">{{hero.id}}</span> {{hero.name}}
  				<img src="{{hero.image}}" class="heroes-face">
			</li>
		</ul>
	    <div *ngIf="selectedHero">
    		<h2>{{selectedHero.name}} details!</h2>
    		<div>
    			<label>id: </label>{{selectedHero.id}}
    		</div>
    		<div>
        		<label>name: </label>
        		<input [(ngModel)]="selectedHero.name" placeholder="name"/>
        		<label>hero image: </label>{{selectedHero.image}}
      		</div>
    	</div>	
  		`,
  	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 20em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	 .heroes .heroes-face {
		width: 30px;
		height: 35px;
		float: right;
	 }
	`]
})

export class AppComponent  {
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;
	onSelect(hero: Hero): void {
    	this.selectedHero = hero;
    }
}

export class Hero {
	id: number;
	name: string;
	image: string;
}

