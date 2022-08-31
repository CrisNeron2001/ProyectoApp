import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  fecha: string;

  entrada: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(public toastController: ToastController) { 
    moment.locale('es-mx');
    this.fecha = moment().format();
    this.cargarEntrada();
    }

  cargarEntrada(){
    var fecha = moment(this.fecha).format('DD-MM-YYYY');
    this.entrada = JSON.parse(localStorage.getItem('entrada'));
    if(this.entrada){
      var entradaActual = this.entrada.find((elemento) =>{
        return elemento.fecha == fecha;
      });
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }
  
  inicializarNuevaEntrada(){
    var fecha = moment(this.fecha).format('DD-MM-YYYY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MM');
    var anio = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' + anio,
      fecha: fecha,
      texto: ' '
    }
  }

  async guardar(entradaActual:{
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('DD-MM-YYYY');

    if(this.entrada){
      var item = this.entrada.find((elemento) =>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('entradas', JSON.stringify(this.entrada));
      }else{
        this.guardarItem(entradaActual);
      }
    }else{
      this.entrada = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });

    toast.present();

  }

  guardarItem(entrada:{fecha: string, fechaTexto: string, texto: string}){
    this.entrada.push(entrada);
    localStorage.setItem('entrada', JSON.stringify(this.entrada));
  }
  

  ngOnInit() {
  }

}
