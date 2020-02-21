import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokedex-response';

@Pipe({
  name: 'pokemonPipe'
})
export class PokemonPipePipe implements PipeTransform {

  transform(pokemonList: Pokemon[], text: string): unknown {
    if (text.length === 0) {
      return pokemonList;
    }
    const textLower: string = text.toLocaleLowerCase();
    return pokemonList.filter( (school) => {
      return school.name.toLocaleLowerCase().includes(textLower);
    });
  }

}
