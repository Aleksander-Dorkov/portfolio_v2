import { Component, Input } from '@angular/core';
import { ProjectDetails } from "../../model/model";
import { CardModule } from "primeng/card";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardModule],
  template: `
    <div class="wrapper">
      <p-card>
        <h1>{{ project.projectTitle }}</h1>
        <div class="project-info">
          <a href="{{project.deployedUrl}}" target="_blank" class="link-wrapper">
            <i class="pi pi-arrow-up-right" style="margin-left: 0"></i>
          </a>
          <span>View Deployed</span>
          <a href="{{project.backEndGithubUrl}}" target="_blank" class="link-wrapper">
            <i class="pi pi-github"></i>
          </a>
          <span>Back End</span>
          <a href="{{project.frontEndGithubUrlUrl}}" target="_blank" class="link-wrapper">
            <i class="pi pi-github"></i>
          </a>
          <span>Front End</span>
        </div>
        <img src="{{ project.projectImageUrl }}" alt="not avaialble" style="width: 100%">
        <h2>Description</h2>
        <p>{{ project.description }}</p>
        <h2>Back End Dependencies</h2>
        <ul class="custom-list">
          @for (dependency of project.backEndDependencies; track dependency) {
            <img
              src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/7dee48469efc251a6426e81c788482e2734f7b7d/icons/file_type_maven.svg"
              alt="not available">
            <li>{{ dependency }}</li>
            <br/>
          }
        </ul>
        <h2>Front End Dependencies</h2>
        <ul class="custom-list">
          @for (dependency of project.frontEndDependencies; track dependency) {
            <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" alt="not available">
            <li>{{ dependency }}</li>
            <br/>
          }
        </ul>
        <h2>Database</h2>
        <ul class="custom-list">
          <img src="https://i.ibb.co/hKyRJvf/icons8-add-database-80.png" alt="not available">
          <li>{{ project.database }}</li>
        </ul>
      </p-card>
    </div>
  `,
  styles: `
    .wrapper {
      margin-bottom: 20px;
    }

    .project-info span {
      font-size: 150%;
      font-weight: bold;
    }

    .project-info i {
      font-size: 1.7rem;
      margin-left: 15px;
      margin-right: 8px;
    }

    .project-info i:hover {
      cursor: pointer;
    }

    .custom-list {
      list-style-type: none;
    }

    .custom-list img {
      width: 1.8rem;
      height: 1.8rem;
      vertical-align: middle;
      margin-right: 0.8rem;
    }

    .custom-list li {
      color: rgb(243, 78, 78);
      background-color: rgb(52, 52, 52);
      border-radius: 5px;
      padding: 2px 4px;
      display: inline-block;
      width: auto;
      margin-bottom: 10px;
    }
  `
})
export class ProjectComponent {
  @Input({required: true})
  project: ProjectDetails

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}
