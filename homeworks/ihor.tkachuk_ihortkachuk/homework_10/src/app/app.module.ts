import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { AppRoutingModule }  from './app-routing.module';
import { HttpModule }        from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroesComponent }     from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroEditComponent }   from './components/hero-edit/hero-edit.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';

import { HeroService } from './services/hero.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroEditComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [HeroService]
})

export class AppModule {
}
