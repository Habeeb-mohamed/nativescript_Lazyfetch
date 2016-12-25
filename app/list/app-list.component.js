"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("data/observable-array");
var dataItem_1 = require("../dataItem");
var listview_1 = require("nativescript-telerik-ui-pro/listview");
var applicationModule = require("application");
var Timer = require("timer");
var posts = require("../posts.json");
var AppListComponent = (function () {
    function AppListComponent(_changeDetectionRef, router) {
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
    }
    AppListComponent.prototype.ngOnInit = function () {
        this.layout = new listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.layout.itemHeight = 120;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(AppListComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppListComponent.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        set: function (value) {
            this._layout = value;
        },
        enumerable: true,
        configurable: true
    });
    AppListComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        Timer.setTimeout(function () {
            var listView = args.object;
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    listView.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                    break;
                }
                var imageUri = applicationModule.android ? posts.images[i].toLowerCase() : posts.images[i];
                that.get()._dataItems.push(new dataItem_1.DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
    };
    AppListComponent.prototype.initDataItems = function () {
        this._dataItems = new observable_array_1.ObservableArray();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (applicationModule.android) {
                this._dataItems.push(new dataItem_1.DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._dataItems.push(new dataItem_1.DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    AppListComponent.prototype.showdetails = function (id) {
        this.router.navigate(['/details/' + id]);
    };
    AppListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-applist",
            templateUrl: "app-list.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, router_1.RouterExtensions])
    ], AppListComponent);
    return AppListComponent;
}());
exports.AppListComponent = AppListComponent;
//# sourceMappingURL=app-list.component.js.map