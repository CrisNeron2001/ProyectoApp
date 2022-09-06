import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  listaJuegos = [{
    img: '/img/kqlntgss9yb5invq8nxi_350x200_1x-0.jpg',
    nombreJuego: 'Crash Bandicoot',
    consola: 'PS4',
    precio: 33000,
    punto: '3 de 5 pts'
  },{
    img: 'img/rxwue7h3qpaymbx3cczd_350x200_1x-0.jpg',
    nombreJuego: 'Terraria',
    consola: 'PC',
    precio: 8000,
    punto: '3 de 5 pts'
  },{
    img: 'img/msMygvW_350x200_1x-0.jpg',
    nombreJuego: 'Hitman 2',
    consola: 'PC',
    precio: 9000,
    punto: '5 de 5 pts'
  },{
    img: 'img/g0blzboqmpvtygv7mpzm_350x200_1x-0.jpg',
    nombreJuego: 'Metal Gear Solid V: The Phantom Pain2',
    consola: 'PC',
    precio: 26741,
    punto: '5 de 5 pts'
  },{
    img: 'img/resident-evil-hd-remaster-2015121151651_1.jpg',
    nombreJuego: 'Resident Evil: Remake',
    consola: 'PC',
    precio: 2201,
    punto: '5 de 5 pts'
  },{
    img: 'img/XTxuLwO_BMQiu-vLgT6hH9Q_Pc7rEzhjvXLA-x53rNM_350x200_1x-0.jpg',
    nombreJuego: 'Pre-order: EA SPORTS™ FIFA 23 Standard Edition',
    consola: 'Xbox Series X|S',
    precio: 59720,
    punto: '3 de 5 pts'
  }]

  constructor(private activeRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(){

    }

}
