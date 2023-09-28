import { Component, OnInit } from '@angular/core';
import { LeitoService } from '../leito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-leito',
  templateUrl: './lista-leito.component.html',
  styleUrls: ['./lista-leito.component.css']
})
export class ListaLeitoComponent implements OnInit{

  public leito: any[] 

  constructor(
    private leitoService: LeitoService,
    private router: Router
  )
  {
    this.leito = []
  }



  getLeitos() {
    this.leitoService.getleitosList().subscribe(data => {
      this.leito = data;
      console.log(data)
    })
  }

  ngOnInit() {
    this.getLeitos()
  }

}



