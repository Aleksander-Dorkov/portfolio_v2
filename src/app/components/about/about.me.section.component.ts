import { Component } from '@angular/core';
import { WorkDetail } from "../../model/model";
import { CardModule } from "primeng/card";
import { WorkDetailComponent } from "./work-detail.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CardModule, WorkDetailComponent],
  template: `
    <h1 class="section-header">
      About Me
    </h1>
    <p-card>
      <div class="row">
        <div class="col-2">
          <img src="https://i.imgur.com/tA5SMsX.png" alt="not found" width="200" height="300">
        </div>
        <div class="col-md-10 col-sm-12">
          <h2>Software Engineer work experience</h2>
          <app-work-detail [workDetail]="openTag"/>
          <app-work-detail [workDetail]="vmWare"/>
          <app-work-detail [workDetail]="vivacom"/>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-md-10 col-sm-12">
          <h2>My developers journey</h2>
          <app-work-detail [workDetail]="personalProjects"/>
          <app-work-detail [workDetail]="softUni"/>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-md-10 col-sm-12">
          <h2>Education</h2>
          <app-work-detail [workDetail]="university"/>
          <app-work-detail [workDetail]="lomonosov"/>
        </div>
      </div>
    </p-card>
  `,
  styles: `
    h2 {
      font-size: 220%;
      margin-bottom: 0;
    }
  `
})
export class AboutMeSectionComponent {
  openTag: WorkDetail = {
    company: 'OpenTag',
    jobTitle: 'Java Developer',
    timeSpan: 'Aug 2022 - Present',
    duties: [
      'Designed and implemented REST endpoints for casino game providers to integrate with our API, and contributed to the development of the service and repository layers of the application',
      'Migrated Apache Thrift endpoints to gRPC',
      'Produced and consumed Kafka events',
      'Monitored Sentry for errors and resolved bugs to ensure application stability',
      'Refactored the applications code to enhance codebase readability and maintainability',
      'Reviewed other people’s code and helped them improve their merge requests',
    ]
  }
  vmWare: WorkDetail = {
    company: 'VMware contract',
    jobTitle: 'Full Stack Java Developer',
    timeSpan: 'November 2021 - Aug 2022',
    duties: [
      'Optimized application workflows to improve overall performance and user experience',
      'Secured the backend with spring security and JWT',
      'Reviewed other people’s code and helped them improve their merge requests',
      'Implemented UI changes and new UI functionalities in Angular',
    ]
  }
  vivacom: WorkDetail = {
    company: 'VIVACOM',
    jobTitle: 'Full Stack Java Developer',
    timeSpan: 'December 2020 - October 2021',
    duties: [
      'Created and updated RESTful APIs consumed by mobile applications',
      'Maintained and enhanced an existing Web Applications back-end and UI',
      'Designed web clients to consume RESTful web services',
      'Established communication between microservices with JSM (ActiveMQ Artemis)',
      'Deployed the newest versions of the application using Jenkins with blue-green deployment strategy',
      'Implemented unit and integration tests and documented the code',
    ]
  }

  personalProjects: WorkDetail = {
    company: 'Personal Projects',
    jobTitle: 'Projects i did with the purpose of becoming a better developer',
    timeSpan: '',
    duties: [
      'Fallowed recommended best developer practises such as',
      'Improved my code quality during the month and a half or so it took me to write my personal projects (including this portfolio)',
      'Researched witch technologies are in the highest demand in the job marked and picked them for my projects',
      'Spend a lot of time fixing the dumbest bugs ever :(',
    ]
  }

  softUni: WorkDetail = {
    company: 'SoftUni Free Courses',
    jobTitle: 'I watched the SoftUni courses online from home and did the homeworks',
    timeSpan: '',
    duties: [
      'Watched the videos to understand the language/library/framework better',
      'Solved the homework problems Tested the solutions with the SoftUni Judge system',
      'Tested the homework solutions with the SoftUni Judge system',
      'Inspected other peoples code to see if there are any different solutions to the problem',
      'Passed through all of the courses of the "Java Web Developer module"'
    ]
  }

  university: WorkDetail = {
    company: 'Technical University Sofia',
    jobTitle: '',
    timeSpan: '',
    duties: [
      'Bachelor\'s degree in mechanical engineering',
    ]
  }

  lomonosov: WorkDetail = {
    company: 'Lomonosov High School',
    jobTitle: '',
    timeSpan: '',
    duties: [
      'Audio Systems and Cinema Diploma',
    ]
  }
}
