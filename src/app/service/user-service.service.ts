import { Injectable } from '@angular/core';
import {Account} from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  accounts: Account[] = [
    {
      username: 'admin',
      password: '123456'
    },
    {
      username: 'thanh',
      password: '123456'
    }
  ];

  constructor() { }
  login(account: Account): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username === account.username && this.accounts[i].password === account.password) {
        return true;
      }
    }
    return false;
  }
}
