"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var observable_1 = require("data/observable");
var posts = require("./posts.json");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(page, _changeDetectionRef) {
        _super.call(this);
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}(observable_1.Observable));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map