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

  somar(a: string, b: string): void {
    let n1: number = parseFloat(a);
    let n2: number = parseFloat(b);

    this.res = this.somaService.somar(n1, n2);
  }

  ngOnInit(): void {
  }

}
