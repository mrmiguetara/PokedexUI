import { Component, OnInit } from '@angular/core';
import { PokedexApiServiceService } from './services/pokedex-api-service.service';
import { Pokemon, Type, PokemonItem } from './interfaces/pokedex-response';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailDialogComponent } from './components/pokemon-detail-dialog/pokemon-detail-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemons: PokemonItem[] = [];
  title = 'pokedexUI';
  loading = true;
  from = '';


  constructor(private pokedex: PokedexApiServiceService, private dialog: MatDialog) {}
  ngOnInit() {
    this.loading = true;
    this.pokedex.getPokemonList().subscribe(
      resp => {
        this.pokemons.push(...resp);
        this.loading = false;
      }
    );
  }
  getImageUrl(item: PokemonItem) {
    const urlSplit = item.url.split('/');
    const itemId = urlSplit[urlSplit.length-2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemId}.png`
  }



  showDetails(item) {
    const dialogRef = this.dialog.open(PokemonDetailDialogComponent, {
      width: '250px',
      data: {item}
    });
  }

}
