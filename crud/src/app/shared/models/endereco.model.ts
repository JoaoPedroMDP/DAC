import { CRUDObject } from "../interfaces/crud-object.interface";

export class Endereco implements CRUDObject{
    constructor(
      public id?: number,
      public rua?: string,
      public numero?: number,
      public complemento?: string,
      public bairro?: string,
      public cep?: string,
      public cidade?: string,
      public estado?: string,
      public residencial?: string
    ){}
}
