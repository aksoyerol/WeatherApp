import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';
import { ApiServiceService } from '../services/api-service.service';
import { Current } from 'src/Models/Current';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
 
}
