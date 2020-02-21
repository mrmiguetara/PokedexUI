import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPipePipe } from './pokemon-pipe.pipe';



@NgModule({
  declarations: [PokemonPipePipe],
  exports: [
    PokemonPipePipe
  ]
})
export class PipesModule { }
