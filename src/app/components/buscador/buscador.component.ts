import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

@Input()heroes:any =[];
@Input()index:number;
termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
    })
  }

}
