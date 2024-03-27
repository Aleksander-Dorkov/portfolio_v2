import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from "@angular/forms";
import { MenubarModule } from "primeng/menubar";
import { MenuItem, PrimeIcons, PrimeNGConfig } from "primeng/api";
import { NavBarComponent } from "./components/nav-bar.component";
import { SkillsSectionComponent } from "./components/skills.section.component";
import { SkillsComponent } from "./components/skills.component";
import AOS from "aos";
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import LocomotiveScroll from 'locomotive-scroll';
import { NavImageComponent } from "./components/nav-image.component";
import { ProjectSectionComponent } from "./components/project.section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, ListboxModule, FormsModule, MenubarModule, NavBarComponent,
    SkillsSectionComponent, SkillsComponent, AnimateOnScrollModule, NavImageComponent,
    ProjectSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
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
