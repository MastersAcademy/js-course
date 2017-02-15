import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../in-memory-data.service";
import { AppRoutingModule } from "../modules/app-routing.module";
import { AppComponent } from "../components/app.component";
import { DashboardComponent } from "../components/dashboard.component";
import { HeroesComponent } from "../components/heroes.component";
import { HeroEditComponent } from "../components/hero-edit.component";
import { HeroService } from "../services/hero.service";
import { HeroSearchComponent } from "../components/hero-search.component";
import { HeroDetailComponent } from "../components/hero-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        HeroEditComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }