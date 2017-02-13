import { TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [HeroesComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(HeroesComponent);
        expect(fixture.componentInstance instanceof HeroesComponent).toBe(true, 'should create AppComponent');
    });
});