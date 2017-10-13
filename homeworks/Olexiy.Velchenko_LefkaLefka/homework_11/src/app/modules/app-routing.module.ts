import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard.component";
import { HeroesComponent } from "../components/heroes.component";
import { HeroDetailComponent } from "../components/hero-detail.component";
import { HeroEditComponent } from "../components/hero-edit.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard",  component: DashboardComponent },
    { path: "detail/:id", component: HeroDetailComponent },
    { path: "heroes",     component: HeroesComponent },
    { path: "edit/:id",   component: HeroEditComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {}