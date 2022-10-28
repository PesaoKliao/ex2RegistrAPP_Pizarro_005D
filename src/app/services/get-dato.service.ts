import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDatoService {
  public static correo: string;
  public static nombre: string;
  public static email: string;
  constructor() { }
}
