// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canActivateFactory } from './auth.guard';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'compra',
    canActivate: [canActivateFactory],
    loadChildren: () => import('./compra/compra.module').then(m => m.CompraModule)
  },
  {
    path: 'venta',
    canActivate: [canActivateFactory],
    loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: canActivateFactory,
      useFactory: canActivateFactory,
      deps: [AuthService, Router]
    }
  ]
})
export class AppRoutingModule {}
