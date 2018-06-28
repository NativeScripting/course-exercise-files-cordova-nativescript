import { Observable } from "tns-core-modules/data/observable";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Pokemon } from "~/model/pokemon";
import { topmost } from "tns-core-modules/ui/frame";
import * as dataService from "~/pokemon-data/pokemon-data-service";

export class HomeViewModel extends Observable {
  public segmentedBarItems: SegmentedBarItem[];
  public selectedBarIndex: number = 0;

  public pokemon: ObservableArray<Pokemon>;

  private pokemonData: Pokemon[];

  constructor() {
    super();

    this.segmentedBarItems = this.getSegmentedBarItems();

    dataService.getPokemonList().then(data => {
      this.pokemonData = data;
      this.sort(true);
    });
  }

  public onSortOrderChanged(args) {
    if (this.pokemonData) {
      this.sort(args.newIndex === 0);
    }
  }

  public onPokemonTap(args): void {
    topmost().navigate({
      moduleName: "pokemon-detail-page/pokemon-detail-page",
      context: this.pokemonData[args.index],
      animated: true,
      transition: {
        duration: 3000,
        name: "slide"
      }
    });
  }

  private sort(asc: boolean): void {
    //perform the sort
    this.pokemonData.sort(
      (a, b) => (a.name > b.name ? (asc ? 1 : -1) : asc ? -1 : 1)
    );
    this.set("pokemon", new ObservableArray(this.pokemonData));
  }

  private getSegmentedBarItems = () => {
    let segmentedBarItem1 = new SegmentedBarItem();
    segmentedBarItem1.title = "A - Z";

    let segmentedBarItem2 = new SegmentedBarItem();
    segmentedBarItem2.title = "Z - A";

    return [segmentedBarItem1, segmentedBarItem2];
  };
}
