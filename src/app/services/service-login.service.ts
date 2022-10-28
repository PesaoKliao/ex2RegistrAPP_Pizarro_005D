import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario {
  email: string;
  password: string;
  nombre: string;
};

const USERS_KEY = 'my-users';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  private _storage: Storage;
  newUsuario: Usuario = <Usuario>{};
  constructor(private storage: Storage) {
    this.init();
  };

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  };

  async addDatos(dato: Usuario): Promise<any> {
    return this.storage.get(USERS_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      } else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    });
  };


  async getUsuarios(): Promise<Usuario[]> {
    return await this.storage.get(USERS_KEY);
  }

  async cerrarSesion() {
    return await this.storage.clear();
  }
}
