import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }

  somar( a: number, b: number): number {
    console.log("a+b")
    return a+b;
  }

  subtrair( a: number, b: number): number {
    console.log("a-b")
    return a-b;
  }

  dividir( a: number, b: number): number {
    console.log("a/b")
    return a/b;
  }

  multiplicar( a: number, b: number): number {
    console.log("a*b")
    return a*b;
  }
}
