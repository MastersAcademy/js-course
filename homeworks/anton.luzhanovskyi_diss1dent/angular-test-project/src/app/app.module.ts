import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeroUpdateComponent } from './components/hero-update/hero-update.component';

import { HeroService }  from './services/hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroUpdateComponent,
    DashboardComponent,
  ],
providers: [
    HeroService
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
