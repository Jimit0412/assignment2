import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRestaurantsService } from '../get-restaurants.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  id;
  restaurant;
  constructor(private route: ActivatedRoute, private getRestaurantsService: GetRestaurantsService) {
    
   }

   ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRestaurantsService.getPlacesId(this.id).subscribe(res=>{
      console.log("The Response", res)
      this.restaurant= res.result;
    });
    console.log("PLaces Call Done")
  }

  photo(ref){
    var printit= this.getRestaurantsService.getPhotoURL(ref);
    console.log("Profile",printit)
    return printit
  }

}
