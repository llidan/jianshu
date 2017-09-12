/**
 * Created by Administrator on 2017/9/12.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MiscComponent } from './misc/misc.component';
import { SettingComponent } from './setting.component';


const routes: Routes = [
  {
    path: 'setting',
    component: SettingComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'misc',
        component: MiscComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SettingRoutingModule {}
