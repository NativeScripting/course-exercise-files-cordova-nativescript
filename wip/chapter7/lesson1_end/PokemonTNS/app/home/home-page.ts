import { EventData } from "tns-core-modules/data/observable";
import { HomeViewModel } from "./home-view-model";
import { Page } from "tns-core-modules/ui/page";

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = new HomeViewModel();
}
