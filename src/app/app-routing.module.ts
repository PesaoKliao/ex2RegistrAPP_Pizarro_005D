import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoProfesorGuard } from './guards/no-ingresado-profesor.guard';
import { IngresadoProfesorGuard } from './guards/ingresado-profesor.guard';
import { NoIngresadoAlumnoGuard } from './guards/no-ingresado-alumno.guard';
import { IngresadoAlumnoGuard } from './guards/ingresado-alumno.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[NoIngresadoAlumnoGuard]
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [IngresadoAlumnoGuard]
  },
  {
    path: 'profesor',
    loadChildren: () => import('./pages/profesor/profesor.module').then( m => m.ProfesorPageModule),
    canActivate: [IngresadoProfesorGuard]
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./pages/login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule),
    canActivate:[NoIngresadoAlumnoGuard]
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule),
    canActivate:[NoIngresadoAlumnoGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoAlumnoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
