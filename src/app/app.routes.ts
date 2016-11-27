import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent }
];
