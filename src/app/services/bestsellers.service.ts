import { Injectable } from '@angular/core';
import bestselling from '../bestselling.json';


@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  constructor() { }

  bestselling = bestselling;

  get_bestselling()
  {
    return this.bestselling;
  }

}
