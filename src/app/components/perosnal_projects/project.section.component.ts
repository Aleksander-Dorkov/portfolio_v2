import { Component } from '@angular/core';
import { ProjectDetails } from "../../model/model";
import { ProjectComponent } from "./project.component";

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  template: `
    <div class="row justify-content-center" style="margin-left: 4%; margin-right: 4%">
      <h1 class="section-header">
        Projects
      </h1>
      <div class="col-12">
        <app-project [project]="onlineMovieDatabase"/>
      </div>
      <div class="col-12">
        <app-project [project]="bugTrackerDatabase"/>
      </div>
    </div>
  `,
  styles: `
  `
})
export class ProjectSectionComponent {
  onlineMovieDatabase: ProjectDetails = {
    projectTitle: 'Online Movie Database',
    description: 'SPA WebApp that allows users to brows movies, tv shows, actors. Add favorites, submit comments',
    projectImageUrl: 'https://i.ibb.co/hKVWzWP/Untitled.png',
    deployedUrl: 'https://online-movie-database.netlify.app/',
    backEndGithubUrl: 'https://github.com/Aleksander-Dorkov/Movie-DB-GraphQL-API',
    frontEndGithubUrlUrl: 'https://github.com/Aleksander-Dorkov/Movie-DB-Front-End',
    backEndDependencies: [
      "Spring Security",
      "JJWT - JWT generator",
      "GraphQL Java Kickstart",
      "Playground (click)",
      "GraphiQL (click)",
      "Voyager (click)",
      "Spring Web",
      "Spring Data JPA",
      "Hibernate Validator",
      "Spring Actuator",
      "ModelMapper",
      "Spring Devtools",
      "Lombok"
    ],
    frontEndDependencies: [
      "Typescript",
      "React",
      "React Hook Form - for form validation",
      "React Router Dom",
      "React Redux",
      "Apollo/client - For GraphQL API calls",
      "Material UI - Component UI library",
      "React Toastify",
      "React Animate On Scroll",
      "Axios",
      "lodash",
      "material-table - Enhanced table for Material UI"
    ],
    database: 'PostgreSQL'
  }
  bugTrackerDatabase: ProjectDetails = {
    projectTitle: 'Bug Tracker',
    description: 'SPA WebApp that imitates a Bug Tracker. Users can create Projects, submit Tickets, resolve Tickets comment on this tickets.\n',
    projectImageUrl: 'https://i.ibb.co/0Fh3S0y/image.png',
    deployedUrl: 'https://destroy-bugs.netlify.app/',
    backEndGithubUrl: 'https://github.com/Aleksander-Dorkov/Issue-Bug-Treacker-REST-API',
    frontEndGithubUrlUrl: 'https://github.com/Aleksander-Dorkov/Issue-Bug-Treacker-Front-End',
    backEndDependencies: [
      "Spring Security",
      "JJWT - JWT generator",
      "Springfox Swagger UI (click)",
      "Spring Web",
      "Spring Data JPA",
      "Hibernate Validator",
      "Spring Actuator",
      "ModelMapper",
      "Spring Devtools",
      "Lombok"
    ],
    frontEndDependencies: [
      "Typescript",
      "React",
      "React Hook Form - for form validation",
      "React Router Dom",
      "React Redux",
      "Ant Design - Component UI library",
      "Framer Motion - For route transition animation",
      "React Toastify",
      "React Chartjs 2",
      "React Animate On Scroll",
      "Axios"
    ],
    database: 'PostgreSQL'
  }
}
