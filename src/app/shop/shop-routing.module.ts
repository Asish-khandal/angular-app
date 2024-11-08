import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

import { DisplayShopComponent } from "./display-shop/display-shop.component";

const routes: Routes = [{ path: "", component: DisplayShopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
