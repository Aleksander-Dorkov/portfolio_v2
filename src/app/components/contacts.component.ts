import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule
  ],
  template: `
    <h1>
      Contacts and Feedback
    </h1>
    <div class="row justify-content-center">
      <p-card>
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
        <h2>Feedback</h2>
        <p>Please feel free to send me feedback how I can improve my Resume, Portfolio etc...</p>
        <form [formGroup]="feedBackForm" (ngSubmit)="onSubmit()">
          <div class="flex flex-column gap-2 mt-3">
            <label for="name">Name</label>
            <br/>
            <input pInputText id="name" formControlName="name"/>
          </div>
          <div class="flex flex-column gap-2 mt-3">
            <label for="email">Email</label>
            <br/>
            <input pInputText id="email" formControlName="email"/>
          </div>
          <div class="flex flex-column gap-2 mt-3">
            <label for="message">Message</label>
            <br/>
            <textarea rows="5" cols="30"
                      pInputTextarea
                      id="message"
                      formControlName="message">

            </textarea>
          </div>
          <button [loading]="loading"
                  pButton
                  pRipple
                  label="Submit"
                  type="submit"
                  class="p-button-help mt-3">
          </button>
        </form>
      </p-card>
    </div>
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

    form {
      margin-left: 2.5rem;
    }

    form button {
      width: 10rem
    }

    form input {
      width: 17.5rem;
    }
  `
})
export class ContactsComponent {
  feedBackForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  loading = false;

  onSubmit() {
    if (this.feedBackForm.valid) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.feedBackForm.reset();
    }
  }
}

