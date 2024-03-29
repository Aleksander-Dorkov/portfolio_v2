import { Component } from '@angular/core';
import { SkillsSectionComponent } from "../skills/skills-section.component";

@Component({
  selector: 'app-nav-image',
  standalone: true,
  imports: [
    SkillsSectionComponent
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
          <a href="https://github.com/Aleksander-Dorkov" target="_blank" class="link-wrapper">
            <i class="pi pi-github" style="font-size: 2rem"></i>
          </a>
          <span>Github</span>
          <a href="./my-pdf.pdf" download target="_blank" class="link-wrapper">
            <i class="pi pi-download" style="font-size: 2rem"></i>
            <span>Resume</span>
          </a>
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

    .link-wrapper {
      text-decoration: none;
      color: inherit
    }
  `
})
export class NavImageComponent {

}
