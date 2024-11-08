import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { groceryAction } from "../../store/actions/grocery.action";
import { Grocery } from "../../model/interface/grocery.model";
import { BucketComponent } from "../../components/bucket/bucket.component";
import { GroceryComponent } from "../../components/grocery/grocery.component";

@Component({
  selector: "app-display-shop",
  standalone: true,
  imports: [BucketComponent, GroceryComponent],
  templateUrl: "./display-shop.component.html",
  styleUrl: "./display-shop.component.css",
})
export class DisplayShopComponent {
  constructor(private store: Store<{ groceries: Grocery[] }>) {}

  ngOnInit() {
    this.store.dispatch(groceryAction.loadGroceries());
  }
}
