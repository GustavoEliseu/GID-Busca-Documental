import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  //função para mostrar e esconder a busca avançada.
  mostrar(){
    if ($(".dropdown-content").hasClass("show") == true) {
      $(".dropdown-content").removeClass("show");
    }
    else{
      $(".dropdown-content").addClass("show");
    }
  }
  
  
}
