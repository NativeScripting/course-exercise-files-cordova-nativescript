import * as observableModule from "tns-core-modules/data/observable";

export function PokemonDetailViewModel(pokemon) {
  return observableModule.fromObject({
    pokemon
  });
}
