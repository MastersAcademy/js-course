import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <div class="col-xs-12">
          <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
           </nav>
        </div>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
}

RouterModule.forRoot([
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
]);