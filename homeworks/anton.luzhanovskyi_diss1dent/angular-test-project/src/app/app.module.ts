import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {NgbModule}              from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';

import { HeroService }  from './services/hero.service';
import { InMemoryDataService }  from './data/in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
