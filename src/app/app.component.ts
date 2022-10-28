import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[]=[ 
    {
      icon: 'settings-outline',
      name:  'Configuracion',
      redirecTo: '/configuracion' 
    },
    {
      icon: 'exit-outline',
      name:  'Cerrar Sesion',
      redirecTo: '/inicio' 
    }

  ];

  constructor() {}
}
