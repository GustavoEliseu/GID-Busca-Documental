import { Component } from '@angular/core';
import {Projeto} from "../projeto.interface"
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acao',
  templateUrl: 'acao.html',
})
export class AcaoPage {
  acao:Projeto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acao= navParams.get('projeto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcaoPage');
  }

}
