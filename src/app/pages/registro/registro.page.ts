import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceLoginService, Usuario } from '../../services/service-login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    formularioRegistro: FormGroup;
    newUsuario: Usuario = <Usuario>{};
    usuarios: Usuario[] = [];
  
    constructor(private registroService: ServiceLoginService,
      private alertController: AlertController,
      private toastController: ToastController,
      private fb: FormBuilder) {
      this.formularioRegistro = this.fb.group({
        'email': new FormControl('', Validators.required),
        'nombre': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
      });
    }
  
    ngOnInit() {
    }
  
    async CrearUsuario() {
      var form = this.formularioRegistro.value;
      if (this.formularioRegistro.invalid) {
        this.alertError();
      } else {
        this.newUsuario.email = form.email;
        this.newUsuario.password = form.password;
        this.newUsuario.nombre = form.nombre;
        this.registroService.addDatos(this.newUsuario).then(dato => {
          this.newUsuario = <Usuario>{};
          this.showToast('Usuario creado');
        });
        this.formularioRegistro.reset();
      }
    };
  
    async alertError() {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Por favor, revise los datos ingresados y vuelva a intentarlo',
        buttons: ['OK'],
        //custom css
        cssClass: 'alertcss'
      });
      await alert.present();
    };
  
    async showToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000,
        cssClass: 'toastcss'
      });
      await toast.present();
    };
  
    async RevisarCorreo() {
      var a = 0;
      var f = this.formularioRegistro.value;
  
      this.registroService.getUsuarios().then(datos => {
        this.usuarios = datos;
        if (!datos || datos.length == 0) {
          console.log('No hay usuarios creados');
        }
        else {
          for (let obj of this.usuarios) {
            if (obj.email == f.email) { 
              a = 1;
              console.log(f.email);
            }
          }
        }
        console.log(a)
        if (a == 0) {
          this.CrearUsuario();
        } else {
          this.alertEmail();
        }
      });
    };
  
    async alertEmail() {
      const alert = await this.alertController.create({
        header: 'Email ya registrado',
        message: 'Por favor, pruebe con otro email',
        buttons: ['OK'],
        //custom css
        cssClass: 'alertcss'
      });
      await alert.present();
    };
  }
