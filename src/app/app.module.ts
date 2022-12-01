import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './components/nested/parent/parent.component';
import { ChildComponent } from './components/nested/child/child.component';
import { UserImgComponent } from './components/user-list/user-img/user-img.component';
import { UserInfoComponent } from './components/user-list/user-info/user-info.component';
// import { TodoComponent } from './component/todo/todo.component';
import { TodoActionComponent } from './components/todo/todo-action/todo-action.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, ParentComponent, ChildComponent, UserImgComponent, UserInfoComponent, TodoComponent, TodoActionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
