import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomRatingService {

  constructor() { }
  rating:number=0;
  maxRating:number=5;
}
