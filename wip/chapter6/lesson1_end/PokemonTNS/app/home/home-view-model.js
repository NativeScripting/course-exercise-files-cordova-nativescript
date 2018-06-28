"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var frame_1 = require("tns-core-modules/ui/frame");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1FQUFxRTtBQUNyRSwyRUFBeUU7QUFFekUsbURBQW9EO0FBQ3BELGlFQUFtRTtBQUVuRTtJQUFtQyxpQ0FBVTtJQVEzQztRQUFBLFlBQ0UsaUJBQU8sU0FRUjtRQWZNLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQTJDNUIsMEJBQW9CLEdBQUc7WUFDN0IsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDL0MsaUJBQWlCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUVsQyxJQUFJLGlCQUFpQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUMvQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBRWxDLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBMUNBLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVyRCxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNwQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsSUFBSTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3RCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNqQixVQUFVLEVBQUUseUNBQXlDO1lBQ3JELE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0QkFBSSxHQUFaLFVBQWEsR0FBWTtRQUN2QixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FDNUQsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBV0gsb0JBQUM7QUFBRCxDQUFDLEFBdERELENBQW1DLHVCQUFVLEdBc0Q1QztBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwifi9tb2RlbC9wb2tlbW9uXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCAqIGFzIGRhdGFTZXJ2aWNlIGZyb20gXCJ+L3Bva2Vtb24tZGF0YS9wb2tlbW9uLWRhdGEtc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgc2VnbWVudGVkQmFySXRlbXM6IFNlZ21lbnRlZEJhckl0ZW1bXTtcbiAgcHVibGljIHNlbGVjdGVkQmFySW5kZXg6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHBva2Vtb246IE9ic2VydmFibGVBcnJheTxQb2tlbW9uPjtcblxuICBwcml2YXRlIHBva2Vtb25EYXRhOiBQb2tlbW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2VnbWVudGVkQmFySXRlbXMgPSB0aGlzLmdldFNlZ21lbnRlZEJhckl0ZW1zKCk7XG5cbiAgICBkYXRhU2VydmljZS5nZXRQb2tlbW9uTGlzdCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25EYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuc29ydCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRPcmRlckNoYW5nZWQoYXJncykge1xuICAgIGlmICh0aGlzLnBva2Vtb25EYXRhKSB7XG4gICAgICB0aGlzLnNvcnQoYXJncy5uZXdJbmRleCA9PT0gMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9rZW1vblRhcChhcmdzKTogdm9pZCB7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwicG9rZW1vbi1kZXRhaWwtcGFnZS9wb2tlbW9uLWRldGFpbC1wYWdlXCIsXG4gICAgICBjb250ZXh0OiB0aGlzLnBva2Vtb25EYXRhW2FyZ3MuaW5kZXhdLFxuICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDEsXG4gICAgICAgIG5hbWU6IFwic2xpZGVcIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KGFzYzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vcGVyZm9ybSB0aGUgc29ydFxuICAgIHRoaXMucG9rZW1vbkRhdGEuc29ydChcbiAgICAgIChhLCBiKSA9PiAoYS5uYW1lID4gYi5uYW1lID8gKGFzYyA/IDEgOiAtMSkgOiBhc2MgPyAtMSA6IDEpXG4gICAgKTtcbiAgICB0aGlzLnNldChcInBva2Vtb25cIiwgbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLnBva2Vtb25EYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlZ21lbnRlZEJhckl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtMSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgc2VnbWVudGVkQmFySXRlbTEudGl0bGUgPSBcIkEgLSBaXCI7XG5cbiAgICBsZXQgc2VnbWVudGVkQmFySXRlbTIgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgIHNlZ21lbnRlZEJhckl0ZW0yLnRpdGxlID0gXCJaIC0gQVwiO1xuXG4gICAgcmV0dXJuIFtzZWdtZW50ZWRCYXJJdGVtMSwgc2VnbWVudGVkQmFySXRlbTJdO1xuICB9O1xufVxuIl19