import { knownFolders } from "tns-core-modules/file-system";
import { Pokemon } from "~/model/pokemon";

export function getPokemonList(): Promise<Pokemon[]> {
  const file = knownFolders.currentApp().getFile("pokemon-data/pokemon.json");

  return new Promise((resolve, reject) => {
    file
      .readText()
      .then(content => resolve(JSON.parse(content)))
      .catch(err => reject(err));
  });
}
