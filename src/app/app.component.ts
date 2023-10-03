import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManager-Front';
  constructor(private router: Router){}




  adicionarPaciente()
  {
    this.router.navigate(['/criar-paciente'])
  }

  adicionarMedico()
  {
    this.router.navigate(['/criar-medico'])
  }

  adicionarLeito()
  {
    this.router.navigate(['criar-leito'])
  }

  mostrarLeitos()
  {
    this.router.navigate(['/detalhe-leito'])
  }

  mostrarPaciente()
  {
    this.router.navigate(['/pacientes'])
  } 
  
  mostrarMedicos()
  {
    this.router.navigate(['/medicos'])
  }
}
