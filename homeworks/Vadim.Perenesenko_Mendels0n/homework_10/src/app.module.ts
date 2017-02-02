import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from "./hero/hero-detail/hero-detail.component";
import {HeroDetailEditComponent} from "./hero/hero-detail-edit/hero-detail-edit.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetailEditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
