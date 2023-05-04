
import { Component, OnInit } from '@angular/core';


interface Venta {
  month: string;
  total: number;
}

const VENTAS_DATA: Venta[] = [
  { month: 'Enero', total: 5000 },
  { month: 'Febrero', total: 6000 },
  // ...
];

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  displayedColumns: string[] = ['month', 'total'];
  dataSource = VENTAS_DATA;

  constructor() {}

  ngOnInit(): void {}
}
