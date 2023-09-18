import { Component } from '@angular/core';
import { CustomRatingService } from 'src/app/services/custom-rating.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  rating:number;
  maximumRating:number;
  constructor(public ratingService:CustomRatingService) {
    this.rating=ratingService.rating;
    this.maximumRating=ratingService.maxRating;
   }

   range(maxRating:number):number[]{
    return Array.from({length:maxRating}, (_, i)=>i);
   }
   setRating(rating: number): void {
    this.ratingService.rating = rating;
  }
}
