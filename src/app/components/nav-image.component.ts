import { Component } from '@angular/core';
import { SkillsComponent } from "./skills.component";

@Component({
  selector: 'app-nav-image',
  standalone: true,
  imports: [
    SkillsComponent
  ],
  template: `
    <div class="wrapper">
      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
        alt="sa" width="100%" height="1500px">
      <div class="content">
        <h2>
          Aleksandar <span class="blue-text">Dorkov</span>
        </h2>
        <p>Software Engineer</p>
        <div>
          <i class="pi pi-github" style="font-size: 2rem"></i>
          <span>Github</span>
          <i class="pi pi-download" style="font-size: 2rem"></i>
          <span>Resume</span>
        </div>
      </div>
    </div>
  `,
  styles: `
    .wrapper {
      position: relative;
    }

    .content {
      position: absolute;
      top: 45%;
      left: 3%;
      transform: translateY(-50%);
      font-size: 350%;
    }

    .blue-text {
      color: #41c2ea;
    }

    .content h2 {
      margin-bottom: 0;
    }

    .content p {
      margin-top: 0;
    }

    .content div {
      font-size: 60%;
    }

    .content div span {
      margin: 10px
    }
    .content div i:hover {
      cursor: pointer;
    }
    .content div span:hover {
      cursor: pointer;
    }
  `
})
export class NavImageComponent {

}
