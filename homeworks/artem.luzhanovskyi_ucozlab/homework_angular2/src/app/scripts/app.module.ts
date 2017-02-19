import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule }    from '@angular/http';

import { HeroesComponent }  from "./heroes.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroEditComponent } from "./hero-edit.component";
import { HeroService } from './hero.service';
import { AppRoutingModule }     from './app.routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroEditComponent
    ],
    providers: [ HeroService ],
    bootstrap:    [ AppComponent ]
})

export default class AppModule { }