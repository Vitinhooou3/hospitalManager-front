import { Component, OnInit } from '@angular/core';
import { leito } from '../leito';
import { LeitoService } from '../leito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-leito',
  templateUrl: './lista-leito.component.html',
  styleUrls: ['./lista-leito.component.css']
})
export class ListaLeitoComponent implements OnInit {
  leitos: leito[] = []

  constructor(private leitoService: LeitoService, private route: Router){}

  ngOnInit(): void {
      this.getLeitos()
  }

  private getLeitos(){
    this.leitoService.getleitosList().subscribe(data => {
      this.leitos = data
    })
  }

  leitoDetalhes(id: number){
    this.route.navigate(['detalhes-leito', id])
  }

  updateLeito(id: number){
    this.route.navigate(['update-leito', id])
  }

  mudarRotaCreate(): void{
    this.route.navigate(['/create-leito'])
  }


}
