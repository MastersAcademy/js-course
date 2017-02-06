import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';

import { AppComponent }           from './app.component';
import { HeroDetailComponent }    from './components/hero-detail/hero-detail.component';
import { HeroEditComponent }      from './components/hero-edit/hero-edit.component';

import { HeroService } from './services/hero.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [HeroService]
})

export class AppModule {
}
