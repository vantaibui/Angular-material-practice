import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/common-page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/common-page/login-page/login-page.component';
import { RegisterPageComponent } from './pages/common-page/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // loadChildren: () =>
    //   import('./pages/home-page/home-page.module').then(
    //     (module) => module.HomePageModule
    //   ),
    component: HomePageComponent,
  },
  {
    path: 'admin',
    // loadChildren: () =>
    //   import('./pages/admin-page/admin-page.module').then(
    //     (module) => module.AdminPageModule
    //   ),
    component: AdminPageComponent,
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
