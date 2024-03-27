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
    <div class="card">
      <p-menubar [model]="items"></p-menubar>
    </div>
  `,
  styles: ``
})
export class NavBarComponent {
  items: MenuItem[] = [
    {label: 'HOME', icon: PrimeIcons.HOME},
    {label: 'SKILLS', icon: PrimeIcons.BOOK},
    {label: 'PROJECTS', icon: PrimeIcons.SERVER},
    {label: 'ABOUT ME', icon: PrimeIcons.USER},
    {label: 'CONTACTS', icon: PrimeIcons.INBOX}
  ]
}
