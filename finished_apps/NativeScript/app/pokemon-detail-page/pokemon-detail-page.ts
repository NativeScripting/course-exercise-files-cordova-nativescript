import { EventData } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { Image } from "tns-core-modules/ui/image";
import { fromUrl } from "tns-core-modules/image-source";
import { PokemonDetailViewModel } from "./pokemon-detail-view-model";
import {
  connectionType,
  getConnectionType
} from "tns-core-modules/connectivity";
import * as SocialShare from "nativescript-social-share";

let page: Page;

export function onNavigatingTo(args: EventData) {
  page = <Page>args.object;
  page.bindingContext = PokemonDetailViewModel(page.navigationContext);
}

export function onBackButtonTap() {
  topmost().goBack();
}

export function onShareButtonTap() {
  if (getConnectionType() === connectionType.none) {
    alert({
      title: "No internet connection",
      message: "Please connect to the internet and try sharing again.",
      okButtonText: "OK, let me check..",
      cancelable: true
    });
    return;
  }

  const image: Image = page.getViewById("pokemonImage");
  if (image.imageSource) {
    SocialShare.shareImage(image.imageSource);
  } else {
    fromUrl(image.src).then(downloadedImage =>
      SocialShare.shareImage(downloadedImage)
    );
  }
}
