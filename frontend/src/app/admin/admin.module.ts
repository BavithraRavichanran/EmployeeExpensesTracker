import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [AdminComponent, CategoryComponent, UserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
