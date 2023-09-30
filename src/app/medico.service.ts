import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medico } from './medico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
 baseUrl = 'http://localhost:8080/medicos'
  constructor(
    private http: HttpClient
  ) 
  {
   
  }
   
  getMedicosList(): Observable<medico[]>{
    return this.http.get<medico[]>(`${this.baseUrl}`);
  }
  
  createMedicos(medico : medico): Observable<any>{
    return this.http.post(`${this.baseUrl}/post`, medico)
  }
  
  getMedicosById(id: number): Observable<medico>{
    return this.http.get<medico>(`${this.baseUrl}/${id}`)
  }
}
