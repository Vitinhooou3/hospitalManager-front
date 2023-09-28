import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paciente } from './paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
private baseUrl = "http://localhost:8080/pacientes";


constructor(private httpClient: HttpClient) { }

getPacientesList(): Observable<paciente[]>{
  return this.httpClient.get<paciente[]>(`${this.baseUrl}`);
}

createPaciente(paciente : paciente): Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}/post`, paciente)
}

getLeitoById(id: number): Observable<paciente>{
  return this.httpClient.get<paciente>(`${this.baseUrl}/${id}`)
}

updateLeito(id: number, leito: paciente): Observable<Object>{
  return this.httpClient.put(`${this.baseUrl}/${id}`, leito)
}

deleteLeito(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`)
}
}
