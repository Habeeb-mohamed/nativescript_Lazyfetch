import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';

import { AppListComponent } from "./list/app-list.component";
import { AppComponent } from "./app.component";
import { AppDetailsComponent } from "./details/app-details.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from '@angular/router';


@NgModule({
    declarations: [AppComponent,LISTVIEW_DIRECTIVES,AppDetailsComponent,AppListComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
            NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot([{ path: "", redirectTo: "home", pathMatch: 'full' },
        { path: "home", component: AppListComponent, pathMatch: 'full' },
        { path: "details/:id", component: AppDetailsComponent, pathMatch: 'full' }])
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }


