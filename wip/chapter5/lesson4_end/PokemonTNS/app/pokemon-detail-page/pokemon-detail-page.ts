import { EventData } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { PokemonDetailViewModel } from "./pokemon-detail-view-model";

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = PokemonDetailViewModel(page.navigationContext);
}

export function onBackButtonTap() {
  topmost().goBack();
}
