import {Component, OnInit} from "angular2/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
var namesAndEmails = require("../../listview/NamesAndEmails.json")

@Component({
    selector: "my-app",
    providers: [DataItemService],
    templateUrl: "listview/item-reorder/listview-item-reorder.component.html",
    styleUrls: ["listview/item-reorder/listview-item-reorder.component.css"]
})
export class AppComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPersonDataItems());
    }

    public onItemReordered(args: listViewModule.ListViewEventData) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }
}