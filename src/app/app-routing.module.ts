import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { CreateLeitoComponent } from './create-leito/create-leito.component';
import { UpdateLeitoComponent } from './update-leito/update-leito.component';
import { DetalhesLeitoComponent } from './detalhes-leito/detalhes-leito.component';

const routes: Routes = [
  {path: 'home', component: ListaLeitoComponent},
  {path: 'criar', component: CreateLeitoComponent},
  {path: 'detalhes', component: DetalhesLeitoComponent},
  {path: 'update', component: UpdateLeitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
