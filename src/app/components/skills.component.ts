import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import {
  SkillsSectionComponent
} from "./skills.section.component";
import { SkillSectionInfo } from "../model/model";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CardModule,
    SkillsSectionComponent
  ],
  template: `
    <h1>
      Skills
    </h1>
    <div class="row justify-content-center">
      <div class="col-6">
        <app-skills-section [skillSectionInfo]="backend"/>
      </div>
      <div class="col-6">
        <app-skills-section [skillSectionInfo]="frontEnd"/>
      </div>
      <div class="col-12">
        <app-skills-section [skillSectionInfo]="databases"/>
      </div>
    </div>
  `,
  styles: `
    h1 {
      text-align: center;
    }
  `
})
export class SkillsComponent {

  backend: SkillSectionInfo = {
    sectionTitle: 'BackEnd',
    animation:'fade-right',
    programmingSkills: [
      {name: 'Java', svgUrl: 'https://www.vectorlogo.zone/logos/java/java-icon.svg'},
      {name: 'Spring Boot', svgUrl: 'https://spring.io/img/projects/spring-boot.svg'},
      {name: 'Spring Security', svgUrl: 'https://spring.io/img/projects/spring-security.svg'},
      {name: 'Spring Data JPA', svgUrl: 'https://spring.io/img/projects/spring-security.svg'},
      {name: 'Hibernate', svgUrl: 'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg'},
      {name: 'Thymeleaf and JSP', svgUrl: 'https://www.thymeleaf.org/images/thymeleaf.png'},
      {name: 'gRPC', svgUrl: 'https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg'},
      {
        name: 'Kafka',
        svgUrl: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg'
      },
      {name: 'JUnit5 and Mockito', svgUrl: 'https://junit.org/junit5/assets/img/junit5-logo.png'},
      {
        name: 'Maven',
        svgUrl: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/7dee48469efc251a6426e81c788482e2734f7b7d/icons/file_type_maven.svg'
      },
      {name: 'Gradle', svgUrl: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg'},
    ]
  }
  frontEnd: SkillSectionInfo = {
    sectionTitle: 'frontEnd',
    animation:'fade-right',
    programmingSkills: [
      {name: 'HTML', svgUrl: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'},
      {name: 'CSS', svgUrl: 'https://www.iconninja.com/files/64/358/407/css3-icon.svg'},
      {
        name: 'JavaScript',
        svgUrl: 'https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg'
      },
      {
        name: 'TypeScript',
        svgUrl: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'
      },
      {name: 'Angular', svgUrl: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg'},
      {
        name: 'Bootstrap',
        svgUrl: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg'
      },
      {name: 'Clarity Design', svgUrl: 'https://clarity.design/assets/images/clarity-logo.svg'},
      {name: 'jQuery', svgUrl: 'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg'},
    ]
  }
  databases: SkillSectionInfo = {
    sectionTitle: 'Databases',
    animation:'fade-right',
    programmingSkills: [
      {
        name: 'PostgreSQL',
        svgUrl: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'
      },
      {name: 'OracleDB', svgUrl: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg'},
      {name: 'Redis', svgUrl: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg'},
      {name: 'MongoDB', svgUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'}
    ]
  }
}
