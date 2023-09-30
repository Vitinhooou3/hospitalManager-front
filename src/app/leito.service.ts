import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { leito } from './leito';


@Injectable({
  providedIn: 'root'
})
export class LeitoService {
  
  private baseUrl = "http://localhost:8080/leitos";


  constructor(private httpClient: HttpClient) { }

  getleitosList(): Observable<leito[]>{
    return this.httpClient.get<leito[]>(`${this.baseUrl}`);
  }

  createLeito(leito: leito): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/post`, leito)
  }

  getLeitoById(id: number): Observable<leito>{
    return this.httpClient.get<leito>(`${this.baseUrl}/${id}`)
  }

  updateLeito(id: number, leito: leito): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, leito)
  }

  deleteLeito(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }



}
