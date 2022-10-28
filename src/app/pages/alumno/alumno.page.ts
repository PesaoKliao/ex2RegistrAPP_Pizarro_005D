import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { GetDatoService} from '../../services/get-dato.service';
import { ToastController } from '@ionic/angular';
import {ServiceLoginService} from '../../services/service-login.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  temperatura;
  weather;

  constructor(private alertController: AlertController,private menuController:MenuController,
     private serviceLoginService: ServiceLoginService, private toastController: ToastController,
     private weatherService: WeatherService) { }

  ngOnInit() {
    
    this.weatherService.getWeather('santiago', 'cl')
    .subscribe(
      res=>{
        console.log(res);
        this.weather=res;
        this.temperatura=this.weather.main.temp;
      }

    )
  }

  public getName() {
    return GetDatoService.nombre;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async escanearqr(){
    const alert = await this.alertController.create({
    message: '<img src="assets/escanearqr.png" alt="g-maps" style="border-radius: 2px">',
    buttons: ['Confirmar']
});
await alert.present();
}
}