import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string{
    let cantidad = (args[0]) ? args [0] : 10;
    let icono = (args[1]) ? args[1]: '...';

    let result = value.substring(0,cantidad);
    return result + icono
  }

}
