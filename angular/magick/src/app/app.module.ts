import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DreamsRecordsComponent } from './dreams-records/dreams-records.component';
import { PracticesRecordsComponent } from './practices-records/practices-records.component';
import { environment } from '../environments/environment';
import { NewDreamComponent } from './dreams-records/new-dream/new-dream.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DreamsRecordsComponent,
    PracticesRecordsComponent,
    NewDreamComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
