import { Injectable } from '@angular/core';

// TODO: Move interfaces to Projects module models folder

export interface ProjectNode {
  id: number;
  name: string;
  children?: ProjectNode[];
}

export interface ProjectFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Injectable({
  providedIn: 'root'
})
export class FileNavigationService {

  constructor() {
  }

  public getMockData(): ProjectNode[] {
    return [
      {
        name: 'Project One',
        id: 0,
        children: [
          {
            name: 'Folder One',
            id: 4,
            children: [
              {
                name: 'File Three',
                id: 65,
                children: [
                  { name: 'File One', id: 67 },
                  { name: 'File Two', id: 34 }
                ]
              },
              { name: 'File One', id: 5 },
              { name: 'File Two', id: 6 }
            ]
          },
          { name: 'File One', id: 1 },
          { name: 'File Two', id: 2 },
          { name: 'File Three', id: 3 }
        ]
      },
      {
        name: 'Project Two',
        id: 7,
        children: [
          {
            name: 'Folder One',
            id: 8,
            children: [
              { name: 'File One', id: 9 },
              { name: 'File Two', id: 10 }
            ]
          },
          {
            name: 'Folder Three',
            id: 11,
            children: [
              { name: 'File One', id: 12 },
              { name: 'File Two', id: 13 }
            ]
          }
        ]
      }
    ];
  }
}
