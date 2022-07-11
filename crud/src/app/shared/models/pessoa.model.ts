import { CRUDObject } from "../interfaces/crud-object.interface";

export class Pessoa implements CRUDObject{
    constructor (
        public id?: number,
        public nome?: string,
        public idade?: number,
        public dataNasc?: string,
        public motorista?: string
    ){}
}
