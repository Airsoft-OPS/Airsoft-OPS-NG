import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'eventos', component: EventosComponent },
    { path: '**', redirectTo: '' }
];