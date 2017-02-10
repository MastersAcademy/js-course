import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService}         from './heroes/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

