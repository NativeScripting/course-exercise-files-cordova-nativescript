"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPokemonList() {
    return new Promise(function (resolve, reject) {
        var list = [
            {
                name: "bulbasaur",
                number: 1,
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                types: ["poison", "grass"]
            },
            {
                name: "ivysaur",
                number: 2,
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                types: ["poison", "grass"]
            }
        ];
        resolve(list);
    });
}
exports.getPokemonList = getPokemonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLWRhdGEtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0UsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsSUFBTSxJQUFJLEdBQWM7WUFDdEI7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFDSixnRkFBZ0Y7Z0JBQ2xGLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDM0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQ0osZ0ZBQWdGO2dCQUNsRixLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQzNCO1NBQ0YsQ0FBQztRQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFwQkQsd0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCJ+L21vZGVsL3Bva2Vtb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb25MaXN0KCk6IFByb21pc2U8UG9rZW1vbltdPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdDogUG9rZW1vbltdID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcImJ1bGJhc2F1clwiLFxuICAgICAgICBudW1iZXI6IDEsXG4gICAgICAgIHNwcml0ZTpcbiAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xLnBuZ1wiLFxuICAgICAgICB0eXBlczogW1wicG9pc29uXCIsIFwiZ3Jhc3NcIl1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiaXZ5c2F1clwiLFxuICAgICAgICBudW1iZXI6IDIsXG4gICAgICAgIHNwcml0ZTpcbiAgICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8yLnBuZ1wiLFxuICAgICAgICB0eXBlczogW1wicG9pc29uXCIsIFwiZ3Jhc3NcIl1cbiAgICAgIH1cbiAgICBdO1xuICAgIHJlc29sdmUobGlzdCk7XG4gIH0pO1xufVxuIl19