import { Routes }         from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { TestComponent }  from './components/test/test.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent }
];
