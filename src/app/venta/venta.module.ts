import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatTableModule,
  ]
})
export class VentaModule { }
