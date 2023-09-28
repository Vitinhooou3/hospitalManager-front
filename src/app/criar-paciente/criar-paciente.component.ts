import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.css']
})
export class CriarPacienteComponent {

  constructor(
    private http: HttpClient
  )
  {
  }

}
