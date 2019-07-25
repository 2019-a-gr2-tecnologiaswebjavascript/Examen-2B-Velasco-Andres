import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroCajeroComponent} from "./rutas/registro-cajero/registro-cajero.component";
import {LoginCajeroComponent} from "./rutas/login-cajero/login-cajero.component";
import {RutaEquiposComponent} from "./rutas/ruta-equipos/ruta-equipos.component";
import {RutaCrearEquipoComponent} from "./rutas/ruta-equipos/ruta-crear-equipo/ruta-crear-equipo.component";
import {RutaActualizarEquipoComponent} from "./rutas/ruta-equipos/ruta-actualizar-equipo/ruta-actualizar-equipo.component";
import {RutaJugadoresComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-jugadores.component";
import {RutaCrearJugadorComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-crear-jugador/ruta-crear-jugador.component";
import {RutaActualizarJugadorComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-actualizar-jugador/ruta-actualizar-jugador.component";
import {RutaComprarComponent} from "./rutas/ruta-comprar/ruta-comprar.component";
import {RutaComprasComponent} from "./rutas/ruta-compras/ruta-compras.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path:'registro',
        component:RegistroCajeroComponent
    },
    {
        path:'login',
        component:LoginCajeroComponent
    },
    {
        path:'equipes',
        component:RutaEquiposComponent,
    },
    {
        path:'equipos/crear',
        component:RutaCrearEquipoComponent,
    },
    {
        path:'equipos/:idEquipo/actualizar',
        component:RutaActualizarEquipoComponent,
    },
    {
        path:'equipo/:idEquipo/jugadores',
        component:RutaJugadoresComponent,
    },
    {
        path:'equipo/:idEquipo/jugador/crear',
        component:RutaCrearJugadorComponent,
    },
    {
        path:'equipo/:idEquipo/jugadores/:idJugador/actualizar',
        component:RutaActualizarJugadorComponent,
    },
    {
        path:'comprare',
        component:RutaComprarComponent,
    },
    {
        path:'comprase',
        component:RutaComprasComponent,
    },
  { path: 'compras', loadChildren: './pages/compras/compras.module#ComprasPageModule' },
  { path: 'comprar', loadChildren: './pages/comprar/comprar.module#ComprarPageModule' },
  { path: 'equipos', loadChildren: './pages/equipos/equipos.module#EquiposPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
