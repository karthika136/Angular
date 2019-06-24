import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';

import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any = {username:''};
  resdata:any={};
  msg='';

  constructor(private router:Router, private userservice:UsersService) { }

  ngOnInit() {
  }

  login()
  {
    console.log(this.form);
    this.userservice.getUser(this.form).subscribe(res => {
      this.resdata = res;
      if(this.resdata.username == 'admin' && this.resdata.password == 'admin'){
        this.router.navigate(['data']);
      }else{
        window.alert("Invalid Credential");
      }
 
   });
  }

  
}
