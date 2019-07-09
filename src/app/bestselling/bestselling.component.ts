import { Component, OnInit } from '@angular/core';
import { BestsellersService } from '../services/bestsellers.service';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent implements OnInit {
  
  bestselling_books;
  
  constructor(
    private bestsellersService : BestsellersService,
    ) { }

  ngOnInit() {
    this.bestselling_books = this.bestsellersService.get_bestselling();
  }

}
