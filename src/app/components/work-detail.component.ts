import { Component, Input } from '@angular/core';
import { WorkDetail } from "../model/model";

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <h2>{{ workDetail.company }}</h2>
      <p>{{ workDetail.jobTitle }}</p>
      <p>{{ workDetail.timeSpan }}</p>
      <ul class="custom-list">
        @for (duty of workDetail.duties; track duty) {
          <li>
            <i class="pi pi-check-circle"></i>
            {{ duty }}
          </li>
        }
      </ul>
    </div>
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
export class WorkDetailComponent {
  @Input({required: true})
  workDetail: WorkDetail
}
