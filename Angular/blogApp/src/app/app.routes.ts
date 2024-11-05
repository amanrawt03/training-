import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MyBlogsComponent } from './pages/my-blogs/my-blogs.component';
import { ReadBlogComponent } from './pages/read-blog/read-blog.component';
import { AddBlogPageComponent } from './pages/add-blog-page/add-blog-page.component';
import { EditBlogComponent } from './pages/edit-blog/edit-blog.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
{path: "", redirectTo: "/login", pathMatch:"full"},
{path: "login",component: LoginPageComponent, title:"login page"},
{path: "signup", component: SignupPageComponent, title:"signup page"},
{path: "myBlogs", component: MyBlogsComponent, title:"myblogs page", canActivate:[authGuard]},
{path: "readBlog/:id", component: ReadBlogComponent, title:"read blog page", canActivate:[authGuard]},
{path: "addBlog", component: AddBlogPageComponent, title:"add blog page", canActivate:[authGuard]},
{path: "editBlog/:id", component: EditBlogComponent, title:"edit blog page", canActivate:[authGuard]},
{path: "**", redirectTo: "login"}
];
