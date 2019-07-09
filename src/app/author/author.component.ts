import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author = {"first_name" : "Adam", "last_name" : "Bogdanovic", "birth_place": "Bajina Basta", "age": 22, "image": "images/author.jpg", "occupation": "Student", "college": "ICT College of Vocational Studies", "started_studies": "10.1.2016"};

  constructor() { }

  ngOnInit() {
  }

}
