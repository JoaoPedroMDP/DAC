import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { MeupipePipe } from './pipes';


@NgModule({
  declarations: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeupipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeupipePipe
  ]
})
export class SharedModule { }
