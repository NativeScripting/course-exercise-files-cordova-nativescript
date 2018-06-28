import { Observable } from "tns-core-modules/data/observable";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

export class HomeViewModel extends Observable {
  public segmentedBarItems: SegmentedBarItem[];
  public selectedBarIndex: number = 0;

  constructor() {
    super();

    this.segmentedBarItems = this.getSegmentedBarItems();
  }

  public onSortOrderChanged(args) {
    this.sort(args.newIndex === 0);
  }

  private sort(asc: boolean): void {
    //perform the sort
  }

  private getSegmentedBarItems = () => {
    let segmentedBarItem1 = new SegmentedBarItem();
    segmentedBarItem1.title = "A - Z";

    let segmentedBarItem2 = new SegmentedBarItem();
    segmentedBarItem2.title = "Z - A";

    return [segmentedBarItem1, segmentedBarItem2];
  };
}
