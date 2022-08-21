import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

type Project = {
  image: string;
  name: string;
  name_id: string;
  games_count: string;
};

const projects: ReadonlyArray<Project> = [
  // {
  //   image: './assets/media/svg/brand-logos/bebo.svg',
  //   title: 'Briviba SaaS',
  //   link: 'By James',
  // }
];

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
})
export class ProjectsTabComponent implements OnInit {
  allProjects: ReadonlyArray<Project> = [];

  constructor(
    public _categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.allProjects = projects;

    this._categoryService.get().subscribe(resp => {
      this.allProjects = resp;
    });
  }
}
