import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutQuery } from '../../../../core/state/layout/layout.query';
import { FileNavigationService } from '../../../../core/state/file-navigation/file-navigation.service';
import { Router } from '@angular/router';
import { InfTreeNode } from '../../../../../../../../libs/shared-ui/src/lib/modules/tree/models/tree.model';
import { LayoutService } from '../../../../core/state/layout/layout.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public selectedProject: Observable<string>;
  public showSearch: boolean;
  public mockCrumbs = [
    {title: 'Infinitum', route: '/'},
    {title: 'Projects', route: '/'},
    {title: 'Simple Todo', route: '/projects/simple-todo'},
  ];

  constructor(private layoutQuery:  LayoutQuery,
              private layoutService: LayoutService,
              private fileNavigationService: FileNavigationService,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedProject = this.layoutQuery.select(state => state.activeProject);
  }

  public navigateToProject(project: string) {
    const selectedFile: InfTreeNode = {
      path: project,
      isProjectRoot: true,
      id: '1',
      name: 'Run Application',
      icon: '',
      children: []
    }
    this.fileNavigationService.setSelectedFile(selectedFile);
    this.fileNavigationService.setSelectedProject(selectedFile);
    this.fileNavigationService.addActiveFiles(selectedFile);
    this.router.navigateByUrl(`/projects/${project}`);
  }
}
