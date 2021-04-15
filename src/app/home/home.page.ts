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
  filterText:string
  durum:boolean = true
  color=""

  getCurrent(filtertext:string) {
    
    let durum = this.apiService.getCurrentData(this.filterText).subscribe(response => {
      this.response = response
      this.durum=false
      // console.log(response.current.air_quality.gbDefraIndex)
      console.log(response)
    })  
  }

//    kalite(){
//     if(this.response.current.air_quality.gb <= 3 ){
//       this.color="success"
//     }
//     else if ((this.response.current.air_quality.gb > 3) && (this.response.current.air_quality.gb <= 6)){
//     this.color="warning"
//     }
//     else if ((this.response.current.air_quality.gb > 6) && (this.response.current.air_quality.gb <= 9) ){
//     this.color="danger"
//     }
//     console.log(this.color)
     
//  }
    
 
}
