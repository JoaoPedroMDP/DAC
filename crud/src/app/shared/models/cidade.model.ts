import { CRUDObject } from "../interfaces/crud-object.interface";
import { Estado } from "./estado.model";

export class Cidade implements CRUDObject{
    constructor(
        public id?: number,
        public nome?: string,
        public estado?: Estado
    ){}
}
