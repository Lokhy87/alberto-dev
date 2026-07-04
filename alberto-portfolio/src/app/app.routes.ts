import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'projects', component: Projects },
    { path: 'about', component: About },
    { path: 'contact', component: Contact }
];
