import { Component, OnInit } from '@angular/core';
import { FileNavigationQuery } from '../../../../core/state/file-navigation/file-navigation.query';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProjectNode } from '../../../projects/store/project.model';
import { FileNavigationService } from '../../../../core/state/file-navigation/file-navigation.service';

@Component({
  selector: 'app-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.scss']
})
export class ContentNavigationComponent implements OnInit {

  activeTreeNode: string;
  activeFiles$: Observable<ProjectNode[]>;

  constructor(private fileNavigationQuery: FileNavigationQuery,
              private fileNavigationService: FileNavigationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activeFiles$ = this.fileNavigationQuery.select('activeFiles');
    this.fileNavigationQuery.select('activeTreeNode').subscribe(activeNode => {
      activeNode ?
        this.activeTreeNode = activeNode :
        this.router.navigateByUrl('/');
    });
  }

  public navigateToFile(node: ProjectNode): void {
    // TODO: Open the tree when navigating the content nav
    this.fileNavigationService.updateActiveNode(node.name);
    if (node.isProjectRoot) {
      this.fileNavigationService.setSelectedProject(node);
    } else {
      this.fileNavigationService.setSelectedFile(node);
    }
    this.router.navigateByUrl(`/projects/${node.path}`);
  }

  public closeTab(file: ProjectNode, event: MouseEvent) {
    this.fileNavigationService.removeSelectedFile(file);
    event.stopPropagation();
  }
}
