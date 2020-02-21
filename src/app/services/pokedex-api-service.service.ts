import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonItem } from '../interfaces/pokedex-response';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiServiceService {

  url = environment.pokedexBaseUrl;

  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get<PokemonItem[]>(`${this.url}/api/pokedex`);
  }
  getPokemonData(id: number) {
    return this.http.get<Pokemon>(`${this.url}/api/pokedex/${id}`);
  }
  getUrlPokemonData(name: string) {
    return `${this.url}/api/pokedex/download?pokemonName=${name}`;
  }
}
