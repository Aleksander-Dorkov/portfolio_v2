import { Component, Input } from '@angular/core';
import { CardModule } from "primeng/card";
import { SkillSectionInfo } from "../model/model";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CardModule],
  template: `
    <h2 class="align-text-center mb-4">{{ skillSectionInfo.sectionTitle }}</h2>
    <div class="row justify-content-center">
      <!--         data-aos="fade-up"-->
      <!--         data-aos-easing="ease-in-sine"-->
      <!--         data-aos-duration="1000"-->
      @for (skill of skillSectionInfo.programmingSkills; track skill.name) {
        <div class="col-md-2 col-sm-6 mb-3" style="width: 200px;">
          <p-card class="skill-card">
            <img alt="Not found" src="{{skill.svgUrl}}"/>
            <p class="align-text-center">{{ skill.name }}</p>
          </p-card>
        </div>
      }
    </div>
  `,
  styles: `
    .skill-card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease;
      width: 200px;
    }

    .skill-card:hover {
      transform: scale(1.2);
    }

    .skill-card img {
      width: 150px;
      height: 150px;
    }

    .align-text-center {
      text-align: center;
      font-weight: bold;
    }

    :host {
      margin: 0;
    }
  `
})
export class SkillsSectionComponent {

  @Input({required: true})
  skillSectionInfo: SkillSectionInfo
}


