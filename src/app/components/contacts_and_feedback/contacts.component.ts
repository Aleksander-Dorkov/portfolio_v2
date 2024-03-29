import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  template: `
    <h2>Contact me</h2>
    <p>My contact information is listed below</p>
    <ul class="custom-list">
      <li>
        <i class="pi pi-phone"></i>
        Phone Number : +359 878375167
      </li>
      <li>
        <i class="pi pi-envelope"></i>
        Email Address : Click to send me an email
      </li>
      <li>
        <i class="pi pi-file-pdf"></i>
        Resume : Click to read my resume online
      </li>
    </ul>
  `,
  styles: `
    h1 {
      text-align: center;
    }

    h2 {
      display: inline-block;
      width: auto;
      border-bottom: 0.2rem solid white;
      margin-bottom: 0.5rem;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    .custom-list {
      list-style-type: none;
    }

    li {
      margin-bottom: 1rem;
    }

    li i {
      font-size: 1.2rem;
      margin-right: 0.4rem;
    }
  `
})
export class ContactsComponent {

}