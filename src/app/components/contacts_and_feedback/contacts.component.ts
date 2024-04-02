import { Component } from '@angular/core';
import { Constants } from "../../model/constants.model";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  template: `
    <h2>Contact me</h2>
    <p>My contact information is listed below</p>
    <ul class="custom-list">
      <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
        <li>
          <i class="pi pi-phone"></i>
          Phone Number : +359 878375167
        </li>
      </div>
      <li>
        <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
          <a href="mailto:aleksandar.dorkov@gmail.com" class="link-wrapper">
            <i class="pi pi-envelope"></i>
            Email Address : Click to send me an email
          </a>
        </div>
      </li>
      <li>
        @if (Constants.downloadResume) {
          <div data-aos="flip-right" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
            <a href="/assets/Aleksandar_Drokov_CV_2024.pdf" download target="_blank"
               class="link-wrapper">
              <i class="pi pi-file-pdf"></i>
              Resume : Click to read my resume online
            </a>
          </div>
        }
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

  protected readonly Constants = Constants;
}
