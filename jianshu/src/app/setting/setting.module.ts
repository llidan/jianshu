/**
 * Created by Administrator on 2017/9/12.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { SettingComponent } from './setting.component';
import { BasicComponent } from './basic/basic.component';
import { MiscComponent } from './misc/misc.component';
import { SettingNavComponent } from './setting-nav/setting-nav.component';



import { SettingRoutingModule} from './setting.routing.module';

@NgModule({
  declarations: [
    SettingComponent,
    BasicComponent,
    MiscComponent,
    SettingNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SettingRoutingModule
  ],
  providers: [],
  bootstrap: [SettingComponent]
})
export class SettingModule { }
