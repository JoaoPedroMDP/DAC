import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from './directives/numerico.directive';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { MeupipePipe } from './pipes/meupipe.pipe';



@NgModule({
  declarations: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeupipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
