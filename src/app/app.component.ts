import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tupperware';
  grupo = "5A"
  producto  = {
    nom: "tuperr",
    precio: 45,
    foto : "./assets/img/foto.jpg"

  }
}
