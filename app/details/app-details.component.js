"use strict";
var core_1 = require("@angular/core");
var AppDetailsComponent = (function () {
    function AppDetailsComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppDetailsComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppDetailsComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-appdetails",
            templateUrl: "app-details.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppDetailsComponent);
    return AppDetailsComponent;
}());
exports.AppDetailsComponent = AppDetailsComponent;
//# sourceMappingURL=app-details.component.js.map