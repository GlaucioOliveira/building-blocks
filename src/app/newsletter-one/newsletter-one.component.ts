import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-one',
  templateUrl: './newsletter-one.component.html',
  styleUrls: ['./newsletter-one.component.css']
})
export class NewsletterOneComponent implements OnInit {

  email: string = '';
  errorMessage: string = '';

  validateEmail = (Email: any) => {
    return String(Email)
    .toLowerCase()
    .match(
      /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}/
    );
  }

  constructor() { }

  ngOnInit(): void {
  }


  subscribeNewsLetter(): void{
    if(!this.validateEmail(this.email))
    {
      this.errorMessage = 'Email inválido.';
    }
    else
    {
      this.errorMessage = '';
    }
  }


}
