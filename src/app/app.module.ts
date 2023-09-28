import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';







@NgModule({
  declarations: [
    AppComponent,
    ListaLeitoComponent,
    ListaPacientesComponent,
    CriarPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
