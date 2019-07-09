import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  saveMessage()
  {
    var username = this.contactForm.get('username').value;
    var email = this.contactForm.get('email').value;
    var message = this.contactForm.get('message').value;
    var feedback = document.getElementById("feedback");
    feedback.innerHTML = "Message successfully sent by " + username;
  }

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'id' : new FormControl(null),
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    });
  }

}
