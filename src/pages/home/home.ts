import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
import { ResultadosPage } from '../resultados/resultados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  busca:string;
  modSelecionada="Todas";
  coordOuAcao="nomlower";
  constructor(public navCtrl: NavController) {
    
  }

  irParaResultados(){
    this.navCtrl.push(ResultadosPage,{
      minhaBusca: this.busca.toLowerCase(),
      modSelecionada: this.modSelecionada,
      coordenadorOuAcao: this.coordOuAcao
    });
  }
  select1(selecionado:boolean){
    switch(selecionado){
      case true:
      this.coordOuAcao="nomlower"
      break;
      case false:
      this.coordOuAcao="coordlower"
      break;
    }
   
  }
  
}
