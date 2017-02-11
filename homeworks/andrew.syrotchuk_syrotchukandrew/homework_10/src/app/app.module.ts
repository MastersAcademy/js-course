import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './heroes/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './heroes/search/hero-search.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

