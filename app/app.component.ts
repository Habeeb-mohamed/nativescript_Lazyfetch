import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Observable } from "data/observable";
var posts = require("./posts.json")

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent extends Observable  {
   constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        super();
    }
}
