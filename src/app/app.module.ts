import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

//promenjeno
var firebaseConfig = {
  apiKey: "AIzaSyAMozwXSC2CQkoBJe0YCCtql_X3TnFRmeQ",
  authDomain: "firestore-xigo011.firebaseapp.com",
  databaseURL: "https://firestore-xigo011.firebaseio.com",
  projectId: "firestore-xigo011",
  storageBucket: "firestore-xigo011.appspot.com",
  messagingSenderId: "978125356065"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule, 
    FormsModule                           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
