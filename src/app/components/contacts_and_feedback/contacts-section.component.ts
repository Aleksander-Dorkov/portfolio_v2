import { Component } from '@angular/core';
import { ContactsComponent } from "./contacts.component";
import { ContactsFormComponent } from "./contacts-form.component";
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-contacts-section',
  standalone: true,
  imports: [
    ContactsComponent,
    ContactsFormComponent,
    CardModule
  ],
  template: `
    <h1 class="section-header">
      Contacts and Feedback
    </h1>
    <div class="row justify-content-center">
      <p-card>
        <div class="row">
          <div class="col-2">
          </div>
          <div class="col-md-10 col-sm-12">
            <app-contacts/>
            <app-contacts-form/>
          </div>
        </div>
      </p-card>
    </div>
  `,
  styles: `
  `
})
export class ContactsSectionComponent {

}
