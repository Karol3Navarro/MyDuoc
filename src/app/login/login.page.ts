import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: string;
  public password: any;

  constructor() {
    this.correo = '';
    this.password= '';
   }
  

  login(){
    if (this.correo =="admin@gmail.com" && this.password =="12345"){
      alert('Es Admin')
    }else{
      alert('Error, no esta en la base de datos')
    }
  }
  ngOnInit() {
  }

}
