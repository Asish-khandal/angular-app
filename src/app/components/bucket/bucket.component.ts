import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Bucket } from "../../model/interface/bucket.model";

@Component({
  selector: "app-bucket",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./bucket.component.html",
  styleUrl: "./bucket.component.css",
})
export class BucketComponent {
  myBucket$?: Observable<Bucket[]>;

  constructor(private store: Store<{ myBucket: Bucket[] }>) {
    this.myBucket$ = store.select("myBucket");
  }
}
