import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesServices:HeroesService ) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroesServices.getHeroe(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
