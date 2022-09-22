import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user = [
    {
      nombre: 'cross',
      edad: 20,
      hobby: 'tirarse peos en clases'
    },
    {
      nombre: 'joe',
      edad: 34,
      hobby:'bostezar en clases'
    },
    {
      nombre: 'milo',
      edad: 40,
      hobby:'dormir en clases'
    }
  ]

  constructor(private http: HttpClient) { }

  servicioSaludar(nombre:string){
    console.log("hola"+ nombre);
  }
  getUser(){
    return this.user;
  }
  getPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
