import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: AddUserComponent,
  },
  {
    path: "edit",
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
