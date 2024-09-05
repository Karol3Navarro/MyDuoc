import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; //Nos permite pasar de una pagina a otra?

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: string;
  public password: any;

  constructor(private navCtrl: NavController) {
    this.correo = '';
    this.password= '';
   }
  

  login(){
    if (this.correo =="admin@gmail.com" && this.password =="12345"){
      // alert('Es Admin')
      this.navCtrl.navigateForward('/home'); //Pasa informacion a home

    }
    else{
      alert('Error, no esta en la base de datos')
    }
  }
  ngOnInit() {
  }

}
