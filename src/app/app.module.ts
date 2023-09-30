import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { CriarLeitoComponent } from './criar-leito/criar-leito.component';
import { AppComponent } from './app.component';


import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CriarMedicoComponent } from './criar-medico/criar-medico.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaLeitoComponent,
    ListaPacientesComponent,
    CriarPacienteComponent,
    CriarLeitoComponent,
    CriarMedicoComponent,
    ListaMedicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    MatCheckboxModule,
    TableModule,
    ToolbarModule,
    TabMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
