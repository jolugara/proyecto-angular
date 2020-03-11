import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Project } from 'src/app/models/projects';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {


public title: string;
public project: Project;
// tslint:disable-next-line:variable-name
public save_project;
public status: string;
public filesToUpload: Array<File>;
public url: string;

constructor(
  // tslint:disable-next-line:variable-name
  private _projectService: ProjectService,
  // tslint:disable-next-line:variable-name
  private _uploadService: UploadService,
  // tslint:disable-next-line:variable-name
  private _route: ActivatedRoute,
  // tslint:disable-next-line:variable-name
  private _router: Router
) {
  this.title = 'Editar proyecto';
  this.url = Global.url;
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
  // tslint:disable-next-line:semicolon
  )
}

onSubmit() {
  this._projectService.updateProject(this.project).subscribe(
    response => {
        if (response.project) {

        // Subir la imagen
        if (this.filesToUpload) {
          this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
          .then((result: any) => {
            this.save_project = result.project;
            this.status = 'updated';
          });
        } else {
          this.save_project = response.project;
          this.status = 'updated';
        }

      } else {
        this.status = 'updated';
      }
      },
      error => {
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        console.log(<any> error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }


}
