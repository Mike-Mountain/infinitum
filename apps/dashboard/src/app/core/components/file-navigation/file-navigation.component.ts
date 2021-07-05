import { Component, Input, OnInit } from '@angular/core';
import { FileNavigationService } from '../../state/file-navigation/file-navigation.service';
import { Router } from '@angular/router';
import { FileNavigationQuery } from '../../state/file-navigation/file-navigation.query';
import { InfTreeNode } from '../../../../../../../libs/shared-ui/src/lib/modules/tree/models/tree.model';

@Component({
  selector: 'app-file-navigation',
  templateUrl: './file-navigation.component.html',
  styleUrls: ['./file-navigation.component.scss']
})
export class FileNavigationComponent implements OnInit {

  @Input() activeSpaces: string[];

  activeTreeNode: string;
  data: InfTreeNode[];

  constructor(private fileNavigationService: FileNavigationService,
              private fileNavigationQuery: FileNavigationQuery,
              private router: Router) {
    fileNavigationService.getMockData().subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    console.log(this.activeSpaces);
    this.fileNavigationQuery.select('activeTreeNode').subscribe(activeNode => this.activeTreeNode = activeNode);
  }

  navigateToNode(node: InfTreeNode) {
    this.fileNavigationService.updateActiveNode(node.name);
    if (node.isProjectRoot) {
      this.fileNavigationService.setSelectedProject(node);
    } else {
      this.fileNavigationService.setSelectedFile(node);
      this.fileNavigationService.addActiveFiles(node);
    }
    this.router.navigateByUrl(`/projects/${node.path}`);
  }
}
