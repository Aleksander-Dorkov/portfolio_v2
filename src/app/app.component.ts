import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem, PrimeIcons, PrimeNGConfig } from "primeng/api";
import { NavBarComponent } from "./components/nav/nav-bar.component";
import { SkillsSectionComponent } from "./components/skills/skills-section.component";
import { NavImageComponent } from "./components/nav/nav-image.component";
import { ProjectSectionComponent } from "./components/perosnal_projects/project.section.component";
import { AboutMeSectionComponent } from "./components/about/about.me.section.component";
import { ContactsComponent } from "./components/contacts.component";
import { SvgComponent } from "./components/nav/svg.component";

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
    ContactsComponent,
    SvgComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  cars: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    this.cars = [
      {label: '222', icon: PrimeIcons.PLUS, value: 'Audi222'},
      {label: '111', value: 'BM222W'},
      {label: '33', value: 'Merc22edes'},
      {label: '444', value: 'Toyot22a'}
    ];
  }

  ngOnInit(): void {
    // const scroll = new LocomotiveScroll({
    //   // @ts-ignore
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true
    // });
  }
}
