import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthCheckGuard} from './auth-check.guard';
import {IsAdminGuard} from './is-admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthCheckGuard]
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './auth/signin/signin.module#SigninPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule', canActivate: [AuthCheckGuard] },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule', canActivate: [AuthCheckGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule', canActivate: [IsAdminGuard] },
  { path: 'see-team', loadChildren: './admin/see-team/see-team.module#SeeTeamPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
