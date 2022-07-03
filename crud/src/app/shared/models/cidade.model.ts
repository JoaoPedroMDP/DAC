import { CRUDObject } from "../interfaces/crud-object.interface";

export class Cidade implements CRUDObject{
    constructor(
        public id?: number,
        public nome?: string,
        public estado?: string
    ){}
}
