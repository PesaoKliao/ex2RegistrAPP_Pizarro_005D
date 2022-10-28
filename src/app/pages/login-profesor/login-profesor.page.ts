import { Component, OnInit } from '@angular/core';
import { GetDatoService } from '../../services/get-dato.service';
import { ServiceLoginService, Usuario } from '../../services/service-login.service';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios: Usuario[] = [];

  constructor(private registroService: ServiceLoginService, private fb: FormBuilder, private navController: NavController, private alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async Ingresarprofesor() {
    var f = this.formularioLogin.value;
    var a = 0;
    console.log('primer a' + a);
    this.registroService.getUsuarios().then(datos => {
      this.usuarios = datos;
      if (!datos || datos.length == 0) {
        console.log('No hay usuarios creados');
        this.noUsersMsg();
        return null;
      }
      for (let obj of this.usuarios) {
        if (obj.email == f.email && obj.password == f.password) {
          a = 1;
          GetDatoService.nombre = obj.nombre;
          GetDatoService.email = obj.email;
          console.log('ingresado')
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateForward('/profesor');
          return;
        }
      }
      console.log(a);
      if (a === 0) {
        console.log('segundo a' + a);
        this.alertMsg();
      }
    });
  }
  

  async noUsersMsg() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No hay usuarios creados',
      buttons: ['OK'],
      cssClass: 'alertcss'
    });
    await alert.present();
    return;
  }

  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK'],
    });
    await alert.present();
    return;
  }
}
