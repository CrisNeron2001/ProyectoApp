import { Component } from '@angular/core';
import { Animation, AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
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