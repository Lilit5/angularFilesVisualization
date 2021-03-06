import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChooseOsScreenComponent } from './choose-os-screen/choose-os-screen.component';
import { Routes, RouterModule } from '@angular/router';
import { WindowsViewComponent } from './windows-view/windows-view.component';
import { MacViewComponent } from './mac-view/mac-view.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'
import { FilePathService } from './services/file-path.service';
import { Utils } from './utils/utils';
import { HttpClientModule } from '@angular/common/http';
import { FilePathHttpService } from './services/file-path-http.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ChooseOsScreenComponent, pathMatch: 'full' },
  { path: 'windows-view', component: WindowsViewComponent, pathMatch: 'full' },
  { path: 'mac-view', component: MacViewComponent, pathMatch: 'full' },
  { path: 'not-found', component: NotFoundPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
]
@NgModule({
  declarations: [
    AppComponent,
    ChooseOsScreenComponent,
    WindowsViewComponent,
    MacViewComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FilePathService,
    Utils,
    FilePathHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
