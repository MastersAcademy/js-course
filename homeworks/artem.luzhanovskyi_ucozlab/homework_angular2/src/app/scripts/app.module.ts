import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { AppComponent }  from "./app.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroEditComponent } from "./hero-edit.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeroDetailComponent, HeroEditComponent ],
    bootstrap:    [ AppComponent ]
})

export default class AppModule { }
