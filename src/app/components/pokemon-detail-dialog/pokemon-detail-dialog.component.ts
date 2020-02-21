import { Component, OnInit, Inject } from '@angular/core';
import { Pokemon, Type } from 'src/app/interfaces/pokedex-response';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from 'querystring';

import { PokedexApiServiceService } from '../../services/pokedex-api-service.service';
@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.scss']
})
export class PokemonDetailDialogComponent implements OnInit {
  pokemonId: number;
  data: Pokemon;
  constructor(
    public dialogRef: MatDialogRef<PokemonDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any,
    private pokedex: PokedexApiServiceService,

     ) { }

  ngOnInit(): void {
    const pokemon = this.item.item;
    // tslint:disable-next-line: radix
    const urlSplit = pokemon.url.split('/');
    this.pokemonId = parseInt(urlSplit[urlSplit.length-2]);
    this.pokedex.getPokemonData(this.pokemonId).toPromise().then(
      resp => {
        this.data = resp;
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
  getTypes(types: Type[]) {
    return types.map((item) => {
      return item.type.name;
    }).join(', ');
  }

  download() {
    open(this.pokedex.getUrlPokemonData(this.data.name), 'blank');
  }

}
