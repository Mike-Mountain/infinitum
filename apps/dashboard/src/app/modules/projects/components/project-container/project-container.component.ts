import { Component, OnInit } from '@angular/core';
import { FileNavigationQuery } from '../../../../core/state/file-navigation/file-navigation.query';
import { ProjectNode } from '../../store/project.model';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {

  public file: ProjectNode;

  constructor(private fileNavigationQuery: FileNavigationQuery) { }

  ngOnInit(): void {
    this.fileNavigationQuery.select().subscribe(files => {
      this.file = files.selectedFile;
    })
  }

}
