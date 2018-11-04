import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { AcaoPage } from '../acao/acao';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSearch(event){
    console.log(event.target.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  irParaAcao(){
    this.navCtrl.push(AcaoPage);
  }

  barrabusca(){
    
    if ($(".titulo").hasClass("show") == true) {
      $(".titulo").removeClass("show");
    }
    else{
      $(".titulo").addClass("show");
    }
  
  }

}
