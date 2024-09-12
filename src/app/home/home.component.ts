import { Component } from '@angular/core';

import { HousingLocation } from '../housing-location/housing-location-interface';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  /*need tpo import housinglocationcomponent in impoerts and line 2., then uncomment line 15 */
  imports: [ CommonModule,HousingLocationComponent],
  template:`<section>
              <form>
                <input type="type" placeholder="search by city">
                <button class="primary" type="button">search</button>
                <app-housing-location [housingLocation]="housingLocation">housing location</app-housing-location >
 
                
              </form>
            </section>`, 
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
    readonly baseUrl='https://angular.dev/assets/images/tutorials/common';
    housingLocation: HousingLocation= {
      id:9999,
      name: 'Test Home',
      city: 'Test City',
      state:'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits:99,
      wifi:true,
      laundry:false,
    };
  }



