import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from "primeng/api";
import { NavBarComponent } from "./components/nav/nav-bar.component";
import { SkillsSectionComponent } from "./components/skills/skills-section.component";
import { NavImageComponent } from "./components/nav/nav-image.component";
import { ProjectSectionComponent } from "./components/perosnal_projects/project.section.component";
import { AboutMeSectionComponent } from "./components/about/about.me.section.component";
import { SvgComponent } from "./components/nav/svg.component";
import {
  ContactsSectionComponent
} from "./components/contacts_and_feedback/contacts-section.component";
import AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    SkillsSectionComponent,
    NavImageComponent,
    ProjectSectionComponent,
    AboutMeSectionComponent,
    SvgComponent,
    ContactsSectionComponent,
  ],
  template:`
    <app-svg/>
    <app-nav-bar id="HOME"/>
    <app-nav-image/>
    <app-skills-section id="SKILLS"/>
    <app-project-section id="PROJECTS"/>
    <img src="https://i2.wp.com/bicyclenl.com/wp-content/uploads/2015/12/parallax-dark.jpg"
         style="width: 100%"
         alt="not available"/>
    <app-about-me-section id="ABOUTME"/>
    <app-contacts-section id="CONTACTS"/>
  `
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    AOS.init();
  }
}
