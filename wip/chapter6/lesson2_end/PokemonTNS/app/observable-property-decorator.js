"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.ObservableProperty = ObservableProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksTUFBTSxDQUFDLFVBQUMsTUFBa0IsRUFBRSxXQUFtQjtRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDdkMsR0FBRztnQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsR0FBRyxZQUFDLEtBQUs7Z0JBQ0wsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWxCRCxnREFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2YWJsZVByb3BlcnR5KCkge1xuICAgIHJldHVybiAodGFyZ2V0OiBPYnNlcnZhYmxlLCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn0iXX0=