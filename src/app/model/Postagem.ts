import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public data:Date;
    public id:number;
    public tema:Tema;
    public texto:string;
    public titulo:string;
    public usuario:Usuario;
   
  
  }