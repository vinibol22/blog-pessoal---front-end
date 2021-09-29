import { Postagem } from "./Postagem";

export class Usuario{
  public dataNascimento:Date;
  public foto:string;
  public id:number;
  public nome:string;
  public postagem:Postagem[]
  public senha:string;
  public tipo:string;
  public usuario:string;

}