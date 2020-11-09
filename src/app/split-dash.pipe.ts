import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDash'
})
export class SplitDashPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
