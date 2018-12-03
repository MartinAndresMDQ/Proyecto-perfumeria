/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { MatTableModule } from '@angular/material';
import { NgxUploaderModule } from 'ngx-uploader';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// import { MaterialModule } from './material.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MaterialModule,
    NgxUploaderModule,
    // MatTableModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    GridModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AngularFireAuth,AngularFirestore,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
