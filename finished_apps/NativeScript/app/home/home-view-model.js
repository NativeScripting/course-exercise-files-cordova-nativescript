"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var frame_1 = require("tns-core-modules/ui/frame");
var connectivity_1 = require("tns-core-modules/connectivity");
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
        // monitor network connection
        connectivity_1.startMonitoring(function (newConnectionType) {
            return _this.set("offline", newConnectionType === connectivity_1.connectionType.none);
        });
        return _this;
    }
    HomeViewModel.prototype.onSortOrderChanged = function (args) {
        if (this.pokemonData) {
            this.sort(args.newIndex === 0);
        }
    };
    HomeViewModel.prototype.onPokemonTap = function (args) {
        frame_1.topmost().navigate({
            moduleName: "pokemon-detail-page/pokemon-detail-page",
            context: this.pokemonData[args.index],
            animated: true,
            transition: {
                duration: 301,
                name: "slide"
            }
        });
    };
    HomeViewModel.prototype.sort = function (asc) {
        //perform the sort
        this.pokemonData.sort(function (a, b) { return (a.name > b.name ? (asc ? 1 : -1) : asc ? -1 : 1); });
        this.set("pokemon", new observable_array_1.ObservableArray(this.pokemonData));
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1FQUFxRTtBQUNyRSwyRUFBeUU7QUFFekUsbURBQW9EO0FBQ3BELDhEQUFnRjtBQUNoRixpRUFBbUU7QUFFbkU7SUFBbUMsaUNBQVU7SUFTM0M7UUFBQSxZQUNFLGlCQUFPLFNBYVI7UUFyQk0sc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBaUQ1QiwwQkFBb0IsR0FBRztZQUM3QixJQUFJLGlCQUFpQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUMvQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBRWxDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQy9DLGlCQUFpQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFFbEMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7UUEvQ0EsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXJELFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ3BDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFFSCw2QkFBNkI7UUFDN0IsOEJBQWUsQ0FBQyxVQUFBLGlCQUFpQjtZQUMvQixPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFpQixLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDO1FBQTlELENBQThELENBQy9ELENBQUM7O0lBQ0osQ0FBQztJQUVNLDBDQUFrQixHQUF6QixVQUEwQixJQUFJO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSx5Q0FBeUM7WUFDckQsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyQyxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRCQUFJLEdBQVosVUFBYSxHQUFZO1FBQ3ZCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqRCxDQUFpRCxDQUM1RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFXSCxvQkFBQztBQUFELENBQUMsQUE1REQsQ0FBbUMsdUJBQVUsR0E0RDVDO0FBNURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCJ+L21vZGVsL3Bva2Vtb25cIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgc3RhcnRNb25pdG9yaW5nLCBjb25uZWN0aW9uVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xuaW1wb3J0ICogYXMgZGF0YVNlcnZpY2UgZnJvbSBcIn4vcG9rZW1vbi1kYXRhL3Bva2Vtb24tZGF0YS1zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHB1YmxpYyBzZWdtZW50ZWRCYXJJdGVtczogU2VnbWVudGVkQmFySXRlbVtdO1xuICBwdWJsaWMgc2VsZWN0ZWRCYXJJbmRleDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgcG9rZW1vbjogT2JzZXJ2YWJsZUFycmF5PFBva2Vtb24+O1xuICBwcml2YXRlIHBva2Vtb25EYXRhOiBQb2tlbW9uW107XG5cbiAgcHVibGljIG9mZmxpbmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2VnbWVudGVkQmFySXRlbXMgPSB0aGlzLmdldFNlZ21lbnRlZEJhckl0ZW1zKCk7XG5cbiAgICBkYXRhU2VydmljZS5nZXRQb2tlbW9uTGlzdCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25EYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuc29ydCh0cnVlKTtcbiAgICB9KTtcblxuICAgIC8vIG1vbml0b3IgbmV0d29yayBjb25uZWN0aW9uXG4gICAgc3RhcnRNb25pdG9yaW5nKG5ld0Nvbm5lY3Rpb25UeXBlID0+XG4gICAgICB0aGlzLnNldChcIm9mZmxpbmVcIiwgbmV3Q29ubmVjdGlvblR5cGUgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRPcmRlckNoYW5nZWQoYXJncykge1xuICAgIGlmICh0aGlzLnBva2Vtb25EYXRhKSB7XG4gICAgICB0aGlzLnNvcnQoYXJncy5uZXdJbmRleCA9PT0gMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9rZW1vblRhcChhcmdzKTogdm9pZCB7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwicG9rZW1vbi1kZXRhaWwtcGFnZS9wb2tlbW9uLWRldGFpbC1wYWdlXCIsXG4gICAgICBjb250ZXh0OiB0aGlzLnBva2Vtb25EYXRhW2FyZ3MuaW5kZXhdLFxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDEsXG4gICAgICAgIG5hbWU6IFwic2xpZGVcIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KGFzYzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vcGVyZm9ybSB0aGUgc29ydFxuICAgIHRoaXMucG9rZW1vbkRhdGEuc29ydChcbiAgICAgIChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gKGFzYyA/IDEgOiAtMSkgOiBhc2MgPyAtMSA6IDEpXG4gICAgKTtcbiAgICB0aGlzLnNldChcInBva2Vtb25cIiwgbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnBva2Vtb25EYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlZ21lbnRlZEJhckl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtMSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgc2VnbWVudGVkQmFySXRlbTEudGl0bGUgPSBcIkEgLSBaXCI7XG5cbiAgICBsZXQgc2VnbWVudGVkQmFySXRlbTIgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgIHNlZ21lbnRlZEJhckl0ZW0yLnRpdGxlID0gXCJaIC0gQVwiO1xuXG4gICAgcmV0dXJuIFtzZWdtZW50ZWRCYXJJdGVtMSwgc2VnbWVudGVkQmFySXRlbTJdO1xuICB9O1xufVxuIl19