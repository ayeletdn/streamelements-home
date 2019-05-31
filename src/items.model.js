import { observable, decorate } from "mobx";

class Item {

    constructor(name) {
        this.name = name;
    }

    name = "";
    class = "light"
    isOn = false;
}

decorate(Item, {
    isOn: observable,
});

export default class Items {

    constructor(names = ["one", "two", "three"]) {
        // for the sake of the excercise, 
        // make sure we have items in the list.
        this.items = names.map(n => {
            return new Item(n);
        });
    }

}


decorate(Items, {
    items: observable,
});