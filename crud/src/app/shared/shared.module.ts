import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from './directives/numerico.directive';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';



@NgModule({
  declarations: [
    NumericoDirective,
    MinimoValidatorDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
