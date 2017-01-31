import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { BrowserModule }          from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { AppRoutes }              from './app.routes';
import { TestComponent }          from './components/test/test.component';
import { HomeComponent }          from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
