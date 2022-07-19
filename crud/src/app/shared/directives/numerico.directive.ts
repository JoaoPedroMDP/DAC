// import { Directive, HostListener } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // selector: '[numerico]'
  selector: '[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true
    }
  ]
})
// export class NumericoDirective{
export class NumericoDirective implements ControlValueAccessor{
  onChange: any;
  onTouched: any;

  // constructor() { }
  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;

    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;
    this.onChange(valor);
  }

  // ControlValueAccessor
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
