import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  colums = ['Nombre','Apellido','Edad'];

  keys = ['cli_nombre','cli_apellido','cli_edad'];

  clientes:any[] = [
    {
      cli_nombre: 'Emerson',
      cli_apellido: 'Nunez',
      cli_edad: 24
    },
    {
      cli_nombre: 'Saida',
      cli_apellido: 'Pereira',
      cli_edad: 64
    },
  ];

}
