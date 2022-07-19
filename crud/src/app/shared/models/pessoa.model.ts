import { CRUDObject } from "../interfaces/crud-object.interface";

export class Pessoa implements CRUDObject{
    constructor (
        public id?: number,
        public nome?: string,
        public idade: number = 0,
        public dataNasc?: string,
        public motorista?: string
    ){}
}
