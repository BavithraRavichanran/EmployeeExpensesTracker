import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'category', component: CategoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
