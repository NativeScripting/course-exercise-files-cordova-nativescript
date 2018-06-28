"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.selectedBarIndex = 0;
        _this.getSegmentedBarItems = function () {
            var segmentedBarItem1 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem1.title = "A - Z";
            var segmentedBarItem2 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem2.title = "Z - A";
            return [segmentedBarItem1, segmentedBarItem2];
        };
        _this.segmentedBarItems = _this.getSegmentedBarItems();
        return _this;
    }
    HomeViewModel.prototype.onSortOrderChanged = function (args) {
        this.sort(args.newIndex === 0);
    };
    HomeViewModel.prototype.sort = function (asc) {
        //perform the sort
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1FQUFxRTtBQUVyRTtJQUFtQyxpQ0FBVTtJQUkzQztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQU5NLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQWdCNUIsMEJBQW9CLEdBQUc7WUFDN0IsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDL0MsaUJBQWlCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUVsQyxJQUFJLGlCQUFpQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUMvQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBRWxDLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBbkJBLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7SUFDdkQsQ0FBQztJQUVNLDBDQUFrQixHQUF6QixVQUEwQixJQUFJO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNEJBQUksR0FBWixVQUFhLEdBQVk7UUFDdkIsa0JBQWtCO0lBQ3BCLENBQUM7SUFXSCxvQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBbUMsdUJBQVUsR0EyQjVDO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIHNlZ21lbnRlZEJhckl0ZW1zOiBTZWdtZW50ZWRCYXJJdGVtW107XG4gIHB1YmxpYyBzZWxlY3RlZEJhckluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNlZ21lbnRlZEJhckl0ZW1zID0gdGhpcy5nZXRTZWdtZW50ZWRCYXJJdGVtcygpO1xuICB9XG5cbiAgcHVibGljIG9uU29ydE9yZGVyQ2hhbmdlZChhcmdzKSB7XG4gICAgdGhpcy5zb3J0KGFyZ3MubmV3SW5kZXggPT09IDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KGFzYzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vcGVyZm9ybSB0aGUgc29ydFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRCYXJJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgc2VnbWVudGVkQmFySXRlbTEgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgIHNlZ21lbnRlZEJhckl0ZW0xLnRpdGxlID0gXCJBIC0gWlwiO1xuXG4gICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0yID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICBzZWdtZW50ZWRCYXJJdGVtMi50aXRsZSA9IFwiWiAtIEFcIjtcblxuICAgIHJldHVybiBbc2VnbWVudGVkQmFySXRlbTEsIHNlZ21lbnRlZEJhckl0ZW0yXTtcbiAgfTtcbn1cbiJdfQ==