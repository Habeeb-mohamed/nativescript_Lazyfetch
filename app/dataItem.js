"use strict";
// >> listview-angular-data-item
var DataItem = (function () {
    function DataItem(id, name, description, title, text, image, selected) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.title = title;
        this.text = text;
        this.image = image;
        this.selected = selected;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
// << listview-angular-data-item 
//# sourceMappingURL=dataItem.js.map