import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber',
})
export class AccountNumberPipe implements PipeTransform {
  transform(accountNumber: string): string {
    if (accountNumber == null) {
      return;
    }

    const sec1 = accountNumber.slice(0, 2);
    const sec2 = accountNumber.slice(2, 6);
    const sec3 = accountNumber.slice(6, 10);
    const sec4 = accountNumber.slice(10, 14);
    const sec5 = accountNumber.slice(14, 18);
    const sec6 = accountNumber.slice(18, 22);
    const sec7 = accountNumber.slice(22, 26);
    const sec8 = accountNumber.slice(26, 30);

    const newNumber =
      sec1 +
      ' ' +
      sec2 +
      ' ' +
      sec3 +
      ' ' +
      sec4 +
      ' ' +
      sec5 +
      ' ' +
      sec6 +
      ' ' +
      sec7 +
      ' ' +
      sec8;

    return newNumber;
  }
}
