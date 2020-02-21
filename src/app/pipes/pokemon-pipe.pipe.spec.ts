import { PokemonPipePipe } from './pokemon-pipe.pipe';

describe('PokemonPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonPipePipe();
    expect(pipe).toBeTruthy();
  });
});
