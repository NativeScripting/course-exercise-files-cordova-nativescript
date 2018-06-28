"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dataService = require("~/pokemon-data/pokemon-data-service");
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
        dataService.getPokemonList().then(function (data) {
            _this.pokemonData = data;
            _this.sort(true);
        });
        return _this;
    }
    HomeViewModel.prototype.onSortOrderChanged = function (args) {
        if (this.pokemonData) {
            this.sort(args.newIndex === 0);
        }
    };
    HomeViewModel.prototype.sort = function (asc) {
        //perform the sort
        this.pokemonData.sort(function (a, b) { return (a.name > b.name ? (asc ? 1 : -1) : asc ? -1 : 1); });
        this.set("pokemon", new observable_array_1.ObservableArray(this.pokemonData));
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1FQUFxRTtBQUNyRSwyRUFBeUU7QUFFekUsaUVBQW1FO0FBRW5FO0lBQW1DLGlDQUFVO0lBUTNDO1FBQUEsWUFDRSxpQkFBTyxTQVFSO1FBZk0sc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBK0I1QiwwQkFBb0IsR0FBRztZQUM3QixJQUFJLGlCQUFpQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUMvQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBRWxDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQy9DLGlCQUFpQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFFbEMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7UUE5QkEsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXJELFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ3BDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVNLDBDQUFrQixHQUF6QixVQUEwQixJQUFJO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLDRCQUFJLEdBQVosVUFBYSxHQUFZO1FBQ3ZCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqRCxDQUFpRCxDQUM1RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFXSCxvQkFBQztBQUFELENBQUMsQUExQ0QsQ0FBbUMsdUJBQVUsR0EwQzVDO0FBMUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCJ+L21vZGVsL3Bva2Vtb25cIjtcbmltcG9ydCAqIGFzIGRhdGFTZXJ2aWNlIGZyb20gXCJ+L3Bva2Vtb24tZGF0YS9wb2tlbW9uLWRhdGEtc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgc2VnbWVudGVkQmFySXRlbXM6IFNlZ21lbnRlZEJhckl0ZW1bXTtcbiAgcHVibGljIHNlbGVjdGVkQmFySW5kZXg6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHBva2Vtb246IE9ic2VydmFibGVBcnJheTxQb2tlbW9uPjtcblxuICBwcml2YXRlIHBva2Vtb25EYXRhOiBQb2tlbW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2VnbWVudGVkQmFySXRlbXMgPSB0aGlzLmdldFNlZ21lbnRlZEJhckl0ZW1zKCk7XG5cbiAgICBkYXRhU2VydmljZS5nZXRQb2tlbW9uTGlzdCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25EYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuc29ydCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRPcmRlckNoYW5nZWQoYXJncykge1xuICAgIGlmICh0aGlzLnBva2Vtb25EYXRhKSB7XG4gICAgICB0aGlzLnNvcnQoYXJncy5uZXdJbmRleCA9PT0gMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KGFzYzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vcGVyZm9ybSB0aGUgc29ydFxuICAgIHRoaXMucG9rZW1vbkRhdGEuc29ydChcbiAgICAgIChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gKGFzYyA/IDEgOiAtMSkgOiBhc2MgPyAtMSA6IDEpXG4gICAgKTtcbiAgICB0aGlzLnNldChcInBva2Vtb25cIiwgbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnBva2Vtb25EYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlZ21lbnRlZEJhckl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtMSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgc2VnbWVudGVkQmFySXRlbTEudGl0bGUgPSBcIkEgLSBaXCI7XG5cbiAgICBsZXQgc2VnbWVudGVkQmFySXRlbTIgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgIHNlZ21lbnRlZEJhckl0ZW0yLnRpdGxlID0gXCJaIC0gQVwiO1xuXG4gICAgcmV0dXJuIFtzZWdtZW50ZWRCYXJJdGVtMSwgc2VnbWVudGVkQmFySXRlbTJdO1xuICB9O1xufVxuIl19