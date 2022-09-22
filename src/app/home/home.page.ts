import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user= [];
  personajes: any;

  constructor(private apiService: ApiService){
    this.user = this.apiService.getUser();
    this.apiService.getPersonajes().subscribe(
      (resultado: any) => {
        this.personajes = resultado.results
      },
      (error) => {
        console.log(error);  
      }
    );
  }
  saludo(){
    console.log(this.user);
  }
}

  
  

  // contador = 0;

  // constructor(private animationCtrl: AnimationController) {}
  // ngOnInit(){}
  // ngAfterViewInit(){
  //   const animation = this.animationCtrl.create()
  //   .addElement(document.querySelector(".cuadrado"))
  //   .duration(2500)
  //   .iterations(Infinity)
  //   .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  //   .fromTo('opacity', '1', '0');
  //   document.querySelector('#play').addEventListener('click', () => {
  //     animation.play();
  //     this.contador++;
  //   });
  //   document.querySelector('#pause').addEventListener('click', () => {
  //     animation.pause();
  //     this.contador--;
  //   });
  //   document.querySelector('#stop').addEventListener('click', () => {
  //     animation.stop();
  //     this.contador=0;
  //   });
  // }
  // aumentar(){
  //   this.contador = this.contador + 5
  // }