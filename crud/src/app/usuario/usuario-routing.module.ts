import { Routes } from '@angular/router';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component'

export const UsuarioRoutes: Routes = [
    {
        path: 'usuarios',
        children: [
            {
                path: "listar",
                component: ListarUsuarioComponent
            },
            {
                path: "editar/:id",
                component: InserirEditarUsuarioComponent
            },
            {
                path: "novo",
                component: InserirEditarUsuarioComponent
            }
        ],
        data: {
            role: "ADMIN"
        }
    }
]