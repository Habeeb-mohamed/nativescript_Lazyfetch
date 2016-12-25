"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var angular_1 = require('nativescript-telerik-ui-pro/listview/angular');
var app_list_component_1 = require("./list/app-list.component");
var app_component_1 = require("./app.component");
var app_details_component_1 = require("./details/app-details.component");
var router_1 = require("nativescript-angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, angular_1.LISTVIEW_DIRECTIVES, app_details_component_1.AppDetailsComponent, app_list_component_1.AppListComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot([{ path: "", redirectTo: "home", pathMatch: 'full' },
                    { path: "home", component: app_list_component_1.AppListComponent, pathMatch: 'full' },
                    { path: "details/:id", component: app_details_component_1.AppDetailsComponent, pathMatch: 'full' }])
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map