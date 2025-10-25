import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PublicacionesComponent } from './components/publicaciones/publicaciones';

export const routes: Routes = [
    //Añadir las rutas de las pestañas a navegar
    { path: '', component: HomeComponent },
    { path: 'crear', component: PublicacionesComponent}
];