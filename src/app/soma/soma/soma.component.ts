import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';
@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  private res: number = 0;

  get resultado(): string {
    return this.res.toString();
  }

  constructor(private somaService: SomaService) { }

  operar(a: string, b: string, op: string): void {
    let n1: number = parseFloat(a);
    let n2: number = parseFloat(b);
    console.log(op)

    switch (op) {
      case "+":
        console.log("soma")
        this.res = this.somaService.somar(n1, n2)
        break;
      case "-":
        console.log("subtração")
        this.res = this.somaService.subtrair(n1, n2)
        break;
      case "/":
        console.log("divisão")
        this.res = this.somaService.dividir(n1, n2)
        break;
      case "*":
        console.log("Multiplicar")
        this.res = this.somaService.multiplicar(n1, n2)
        break;
    }
  }

  ngOnInit(): void {
  }

}
