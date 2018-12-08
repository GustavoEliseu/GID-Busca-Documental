import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { AcaoPage } from '../acao/acao';
import { Observable } from 'rxjs';
import {Projeto} from "../projeto.interface"
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
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
  busca: string;
  coordenadorOuAcao: string;
  modSelecionada:string;
  afs:AngularFirestore;


  projetos: Observable<Projeto[]>;
  projetosCollectionRef: AngularFirestoreCollection<Projeto>;
  public itemCollection;
  

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth, afs: AngularFirestore) {
  this.busca = navParams.get('minhaBusca');
  this.coordenadorOuAcao = navParams.get('coordenadorOuAcao');
  this.modSelecionada=navParams.get('modSelecionada');
  this.afAuth.auth.signInAnonymously();
  this.afs=afs;
  this.realizarBusca()
   
  }
  
  realizarBusca(){
    if(this.modSelecionada==="Todas"){
      this.projetosCollectionRef = this.afs.collection('BancoDeDados',ref=> ref.orderBy(this.coordenadorOuAcao)
      .startAt(this.busca).endAt(this.busca + '\uf8ff'));
    } else{
      this.projetosCollectionRef = this.afs.collection('BancoDeDados',ref=> ref.orderBy(this.coordenadorOuAcao)
      .where("modelo","==",this.modSelecionada).startAt(this.busca).endAt(this.busca + '\uf8ff'));
    }
    this.projetos = this.projetosCollectionRef.valueChanges();
  }
  
  onSearch(event){
    this.busca =event.target.value;
    this.realizarBusca();
    
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ResultadosPage');
    
  }

  irParaAcao(projeto:Projeto){
    this.navCtrl.push(AcaoPage,{
      projeto: projeto
    });
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
