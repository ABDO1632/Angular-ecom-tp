import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {
  @Input() sectionSlogan="";
  @Input() sectionTitle="";

  constructor() { }

  ngOnInit(): void {
  }

}
