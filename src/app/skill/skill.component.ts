import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill:SkillModel;

  constructor() { }

  ngOnInit() {}

}

export class SkillModel  {
  title:string;
  skills:Array<string>;

  constructor(title:string, skills:Array<string>) {
    this.title = title;
    this.skills = skills;
  }
}