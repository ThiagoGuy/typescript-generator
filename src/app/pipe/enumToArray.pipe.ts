import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  transform(data: any): Object[] {
    const returnArray = new Array<any>();

    const keys: any[] = Object.keys(data);
    const values: any[] = Object.values(data);

    for (let i = 0; i < keys.length; i++) {
      returnArray.push({
        key: keys[i],
        val: values[i]
      });
    }

    return returnArray;
  }
}