import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  
  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/inicio',
      icono: 'home'
    },
    {
      titulo: 'Juegos',
      url: '/juegos',
      icono: 'game-controller'
    },
    {
      titulo: 'Login',
      url: '/login',
      icono: 'happy'
    }
  ]


  constructor(private menu: MenuController, private activeroute: ActivatedRoute, private router: Router,
    private navCtrl: NavController, private alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation());
    })

   }


  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Estas seguro que quieres salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }S
}
