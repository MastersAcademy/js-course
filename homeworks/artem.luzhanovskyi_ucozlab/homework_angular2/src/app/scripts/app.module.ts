import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule }    from '@angular/http';

import { HeroesComponent }  from "./heroes.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroEditComponent } from "./hero-edit.component";
import { HeroSearchComponent } from "./hero-search.component";
import { HeroService } from './hero.service';
import { AppRoutingModule }     from './app.routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroEditComponent,
        HeroSearchComponent
    ],
    providers: [ HeroService ],
    bootstrap:    [ AppComponent ]
})

export default class AppModule { }