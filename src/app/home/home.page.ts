import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Current } from 'src/Models/Current';
import { Response } from 'src/Models/Response';

import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private apiService: ApiServiceService) {
  }
  response:Response
  responseName = ""
  filterText:string
  durum:boolean = true
  color="primary"

  getCurrent(filtertext:string) {
    
    let durum = this.apiService.getCurrentData(this.filterText).subscribe(response => {
      this.response = response
      this.durum=false
      // console.log(response.current.air_quality.gbDefraIndex)
      console.log(response.current.air_quality['gb-defra-index'])
      console.log(response)
      this.kalite()
    })  
  }

   kalite(){
     let current_index = this.response.current.air_quality['gb-defra-index']
    if(current_index <= 3 ){
      this.color="success"
    }
     if ((current_index > 3) && (current_index<= 6)){
    this.color="warning"
    }
     if ((current_index > 6)){
    this.color="danger"
    }
    console.log("color değeri :   " + this.color)
     
 }
    
 
}
