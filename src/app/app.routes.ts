import { Routes } from "@angular/router";
import { LayoutComponent } from "./todos/layout/layout.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "layout",
    pathMatch: "full",
  },

  {
    path: "layout",
    loadChildren: () =>
      import("./todos/todos.module").then((m) => m.TodosModule),
  },
  {
    path: "about-us",
    loadComponent: () =>
      import("./components/about-us/about-us.component").then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: "",
    loadComponent: () =>
      import("./components/about-us/about-us.component").then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "shop",
    loadChildren: () => import("./shop/shop.module").then((m) => m.ShopModule),
  },
];
