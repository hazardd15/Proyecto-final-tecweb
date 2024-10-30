import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];
