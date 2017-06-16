import { Component, OnInit, Input } from '@angular/core';
import { SkillComponent, SkillModel } from '../skill/skill.component';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() skills:Array<SkillModel>;

  constructor() { }

  ngOnInit() {
  }

}
