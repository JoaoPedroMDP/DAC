import { CRUDObject } from "./crud-object.interface";

export interface CRUDService{
    listarTodos(): CRUDObject[];
    inserir(obj: CRUDObject):void;
    buscarPorId(id: number): CRUDObject | undefined;
    atualizar(obj: CRUDObject):void;
    remover(id: number):void;
}