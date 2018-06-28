import { Pokemon } from "~/model/pokemon";

export function getPokemonList(): Promise<Pokemon[]> {
  return new Promise((resolve, reject) => {
    const list: Pokemon[] = [
      {
        name: "bulbasaur",
        number: 1,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        types: ["poison", "grass"]
      },
      {
        name: "ivysaur",
        number: 2,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        types: ["poison", "grass"]
      }
    ];
    resolve(list);
  });
}
