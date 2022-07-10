import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meupipe'
})
export class MeupipePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    if(value !== undefined) {
      return value.toUpperCase();
    }

    return "";
  }
}
