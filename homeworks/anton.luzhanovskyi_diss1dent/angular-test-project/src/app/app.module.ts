import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';

import { HeroService }  from './services/hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
providers: [
    HeroService
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
