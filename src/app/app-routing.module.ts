import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { CreateLeitoComponent } from './create-leito/create-leito.component';
import { UpdateLeitoComponent } from './update-leito/update-leito.component';
import { DetalhesLeitoComponent } from './detalhes-leito/detalhes-leito.component';

const routes: Routes = [
  {path: 'leitos', component: ListaLeitoComponent},
  {path: 'create-leito', component: CreateLeitoComponent },
  {path: 'update-leito/:id', component: UpdateLeitoComponent},
  {path: 'detalhes-leito/:id', component: DetalhesLeitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
