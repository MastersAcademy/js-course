import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroEditComponent } from './hero-edit.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroEditComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }