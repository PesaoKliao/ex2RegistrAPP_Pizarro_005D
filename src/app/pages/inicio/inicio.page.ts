import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  handlerMessage=' ';
  roleMessage=' ';
  constructor(private alertController: AlertController) { }
  

  ngOnInit() {
  }

  async inputProfesor() {
    const alert = await this.alertController.create({
      header: 'Porfavor ingrese sus credenciales de Profesor:',
      buttons: ['Ingresar','Registrar'],
      inputs: [
        {
          placeholder: 'Correo Electronico:',
          attributes: {
            maxlength: 30,
          },
        },
        
                {
          type: 'password',
          placeholder: 'Contraseña:',
          attributes: {
            maxlength: 8,
          },
        },

      ],
    });

    await alert.present();
  }


  async inputAlumno() {
    const alert = await this.alertController.create({
      header: 'Porfavor ingrese sus credenciales de Alumno:',
      buttons: ['Ingresar'],
      inputs: [
        {
          placeholder: 'Correo Electronico',
          attributes: {
            maxlength: 30,
          },
        },
        
                {
          type: 'password',
          placeholder: 'Contraseña',
          attributes: {
            maxlength: 8,
          },
        },

      ],
    });

    await alert.present();
  }

}
