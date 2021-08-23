import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserServiceService} from '../../service/user-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private accountService: UserServiceService, private router: Router) { }

  ngOnInit() {
  }
  submit() {
    const account = this.accountForm.value;
    if (this.accountService.login(account)) {
      this.router.navigate(['/product/list']);
    } else {
      alert('sai');
    }
  }

}
