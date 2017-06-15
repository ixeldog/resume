import { Component } from '@angular/core';
import { SkillComponent, SkillModel } from './skill/skill.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'app';

  links:Array<Link> = [
    new Link("#hello", "Hello"),
    new Link("#skills", "Skills"),
    new Link("#experience", "Experience"),
    new Link("#education", "Education"),
    new Link("#portfolio", "Portfolio"),
    new Link("#feedback", "Feedback"),
    new Link("#contact", "Contact me"),
  ];

  firstName:string = 'First';
  lastName:string = 'Last';

  skills:Array<SkillModel> = [
    new SkillModel("Frontend Languages",
      ["TypeScript", "SASS", "HTML", "CSS", "Javascript", "PHP"]),
    new SkillModel("Frontend Tools", ["Angular 1.x", "Angular 4", "jQuery", "WebStorm", "Visual Studio Code"]),
    new SkillModel("Backend Development", ["C#", ".NET 4.5.x", "Web API", "Visual Studio", "Java", "Maven"]),
    new SkillModel("Database", ["MySQL", "Oracle"])
  ];
}


export class Link {
  constructor(public address:string, public label:string) { }
}