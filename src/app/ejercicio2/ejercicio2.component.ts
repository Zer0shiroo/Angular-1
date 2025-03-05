import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2component.html']
})
export class Ejercicio2Component {
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

}
