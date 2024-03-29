import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: 'app-contacts-form',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RippleModule
  ],
  template: `
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
    <!-- This is just to download the word version of the CV-->
    <a href="/assets/Aleksandar_Drokov_CV_2024.docx" download target="_blank"
       class="link-wrapper">
      <i class="pi pi-file-pdf justify-content-end d-flex"></i>
    </a>
  `,
  styles: `
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
export class ContactsFormComponent {
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
