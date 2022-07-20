import {from} from 'rxjs';

// from(["Curitiba", "SJP", "Pinhais", "Colombo"]).subscribe(valor => console.log(valor));


let arr = ["Maringá", "Jandaia do Sul", "Londrina"];

from(arr).subscribe({
    next: valor =>{
        let x = "Cidade " + valor;
        console.log(x);
    },
    error: valor => console.log("Erro: " + valor),
    complete: () => console.log("Acabou")
});
console.log("Teste");