import { Component, OnInit } from '@angular/core';
import { LeitoService } from '../leito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-leito',
  templateUrl: './lista-leito.component.html',
  styleUrls: ['./lista-leito.component.css']
})
export class ListaLeitoComponent implements OnInit{

   leitos: any[] 

  constructor(
    private leitoService: LeitoService,
    private router: Router
  )
  {
    this.leitos = []
  }

  detalharLeito(id: number){
    this.router.navigate(['detalhes-leito', id])
  }

  getLeitos() {
    this.leitoService.getleitosList().subscribe(leitosList => {
      this.leitos = leitosList;
      console.log(this.leitos)
    })
  }

  ngOnInit() {
    this.getLeitos()
    console.log(this.leitos)
  }

  mudarRota()
  {
    this.router.navigate(['/criar-leito'])
  }
}



