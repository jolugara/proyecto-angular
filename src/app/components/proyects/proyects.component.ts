import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
  providers: [ProjectService]
})
export class ProyectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor(
  // tslint:disable-next-line:variable-name
  private _projectService: ProjectService
  ) {
  this.url = Global.url;
  }

  ngOnInit() {
  this.getProjects();
  }

  getProjects() {
  this._projectService.getProjects().subscribe(
  response => {
  if (response.projects) {
  this.projects = response.projects;
  }
  },
  error => {
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  console.log(<any> error);
  }
  );
  }

}
