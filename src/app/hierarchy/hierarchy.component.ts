import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ApiService } from '../api.service';
import { HierarchyNode } from '../models/hierarchy.model';

@Component({
  selector: 'app-hierarchy',
  templateUrl: 'hierarchy.component.html',
  styleUrls: ['hierarchy.component.css'],
})
export class HierarchyComponent implements OnInit {
  public treeControl = new NestedTreeControl<HierarchyNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<HierarchyNode>();

  constructor(private apiService: ApiService) { }

  public hasChild = (_: number, node: HierarchyNode): boolean => !!node.children && node.children.length > 0;

  public ngOnInit(): void {
    const sessionKey = sessionStorage.getItem('key');
    this.apiService.getHierarchy(sessionKey).subscribe(result => {
      if (result && result.entity && result.entity.nodeStandardMetadata) {
        this.dataSource.data = [result.entity.nodeStandardMetadata];
      }
    });
  }
}