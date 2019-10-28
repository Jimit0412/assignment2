import { Component, OnInit } from '@angular/core';
import { GetRestaurantsService } from '../get-restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  data;
  restaurantName;
  restaurantId;
  restaurantAddress;
  restaurantPhoto;


  constructor(private getRestaurantsService: GetRestaurantsService, private router: Router) {
   }

  ngOnInit() {
  }

  searchValue ="";
  searchNow() :void{
    this.getRestaurantsService.getSearchPlaces(this.searchValue).subscribe(
      result=>{
        this.data= result.results;
      }
    )
  }

  photo(ref){
    var printit= this.getRestaurantsService.getPhotoURL(ref);
    console.log("Search Page", printit)
    return printit
  }
}
