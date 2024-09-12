
import { Component,Input } from '@angular/core';
import { HousingLocation } from './housing-location-interface';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template:`<section class="listing">
              <img 
                class="listing-photo"
                [src]="housingLocation.photo"              
              >
            </section>`,
  styleUrls: ['./housing-location.component.css']  // Use plural 'styleUrls'
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation; 
}

// export interface HousingLocation {
//   id: number;
//   name: string;
//   city: string;
//   state: string;
//   photo: string;
//   availableUnits: number;
//   wifi: boolean;
//   laundry: boolean;
// }