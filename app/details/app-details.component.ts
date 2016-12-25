import { Component } from "@angular/core";

@Component({
     moduleId: module.id,
    selector: "my-appdetails",
    templateUrl: "app-details.component.html",
})
export class AppDetailsComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
