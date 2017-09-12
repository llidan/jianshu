/**
 * Created by Administrator on 2017/9/11.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { SettingComponent } from './setting/setting.component';
import { BasicComponent } from './setting/basic/basic.component';
import { MiscComponent } from './setting/misc/misc.component';

const appChildRoutes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'misc',
    component: MiscComponent
  }
];

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
