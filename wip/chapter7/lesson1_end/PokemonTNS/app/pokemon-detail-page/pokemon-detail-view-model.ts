import * as observableModule from "tns-core-modules/data/observable";
import * as appSettings from "tns-core-modules/application-settings";

export function PokemonDetailViewModel(pokemon) {
  const currentKey = `VISITS_${pokemon.number}`;
  let visits = appSettings.getNumber(currentKey);
  if (visits) {
    visits = visits + 1;
  } else {
    visits = 1;
  }
  appSettings.setNumber(currentKey, visits);
  return observableModule.fromObject({
    pokemon,
    visits
  });
}
