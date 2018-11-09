import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcaoPage } from '../pages/acao/acao';
import { ResultadosPage } from '../pages/resultados/resultados';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'


var config = {
  apiKey: "AIzaSyC-cCD_CaAUJAG9OCT4RuSX2oWYWBezgq0",
  authDomain: "gid-busca-documental.firebaseapp.com",
  databaseURL: "https://gid-busca-documental.firebaseio.com",
  projectId: "gid-busca-documental",
  storageBucket: "gid-busca-documental.appspot.com",
  messagingSenderId: "981290136032"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcaoPage,
    ResultadosPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcaoPage,
    ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
