import { medico } from "./medico"
import { paciente } from "./paciente"

export class leito{
    id: number = 0
    disponivel: boolean = true
    id_Medico  : number = 0
    id_paciente: number = 0 
    medico : medico = new medico()
    paciente : paciente = new paciente()
}