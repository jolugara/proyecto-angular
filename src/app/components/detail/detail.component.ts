import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/projects';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public confirm: false;

  constructor(
    // tslint:disable-next-line:variable-name
    private _projectService: ProjectService,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute
  ) {
      this.url = Global.url;
      this.confirm = false;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // tslint:disable-next-line:prefer-const
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        console.log(<any> error);
      }
    );
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/proyectos']);
        }
      },
      error => {
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        console.log(<any> error);
      }
    );
  }



}
