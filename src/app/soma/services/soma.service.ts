import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }

  somar( a: number, b: number): number {
    return a+b;
  }
}
