import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
      <div *ngIf="hero">
      		<h2>{{hero.name}} details!</h2>
      		<div>
      			<label>id: </label>{{hero.id}}
      		</div>
      		<div>
          		<label>name: </label>{{hero.name}}
          </div>
          <div>
          		<label>hero image: </label>{{hero.image}}
          </div>
          <div>
          		<label>hero skill: </label>{{hero.skill}}
          </div>
      </div>
    `,
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}
