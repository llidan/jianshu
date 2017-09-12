import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NavComponent } from './nav/nav.component';


import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import { SettingComponent } from './setting/setting.component';
import { BasicComponent } from './setting/basic/basic.component';
import { MiscComponent } from './setting/misc/misc.component';
import { SettingNavComponent } from './setting/setting-nav/setting-nav.component';

import { SettingRoutingModule } from './setting/setting.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistComponent,
    NavComponent,
    SettingComponent,
    BasicComponent,
    MiscComponent,
    SettingNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SettingRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
