import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  template: `
    <div class="triangle-top-right">
      <a href="https://github.com/Aleksander-Dorkov" target="_blank" class="link-wrapper">
        <i class="pi pi-github"></i>
      </a>
    </div>
    <div class="card">
      <p-menubar [model]="items"></p-menubar>
    </div>
  `,
  styles: `
    div.card {
      position: fixed;
      z-index: 998;
      width: 100%;
      top: 0;
    }

    .triangle-top-right {
      z-index: 999;
      position: fixed;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      border-style: solid;
      border-width: 0 200px 200px 0;
      border-color: transparent #7036b3 transparent transparent;
    }

    .triangle-top-right i {
      position: absolute;
      top: 4rem;
      left: 9rem;
      transform: translate(-50%, -50%) rotateZ(50deg);
      font-size: 3.5rem;
    }

    .triangle-top-right i:hover {
      cursor: pointer;
    }

    .link-wrapper {
      text-decoration: none;
      color: inherit
    }
  `
})
export class NavBarComponent {
  items: MenuItem[] = [
    {label: 'HOME', icon: PrimeIcons.HOME, command: this.navigateToSection},
    {label: 'SKILLS', icon: PrimeIcons.BOOK, command: this.navigateToSection},
    {label: 'PROJECTS', icon: PrimeIcons.SERVER, command: this.navigateToSection},
    {label: 'ABOUT ME', icon: PrimeIcons.USER, command: this.navigateToSection},
    {label: 'CONTACTS', icon: PrimeIcons.INBOX, command: this.navigateToSection}
  ]

  private navigateToSection($event: any) {
    const menuItemName = $event.item.label.replace(/\s/g, "");
    document.getElementById(menuItemName)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
