import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
    //moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1 class="my-3">{{title}}</h1>
        <div class="col-xs-12">
          <nav>
            <a routerLink="/dashboard" routerLinkActive="active" class="btn btn-primary">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active" class="btn btn-primary">Heroes</a>
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