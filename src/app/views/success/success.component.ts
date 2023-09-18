import { Component } from '@angular/core';
import { CustomRatingService } from 'src/app/services/custom-rating.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  successRating!:number;
  constructor(private ratingService:CustomRatingService) {
    this.successRating=ratingService.rating;
   }
}
