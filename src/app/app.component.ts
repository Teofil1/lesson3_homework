import { Component } from '@angular/core';
import { TreeNode } from './model/treeNode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeNode: TreeNode = {
      value: "Root",
      isRoot: true,
      subTreeNodes: [
        {
          value: "Subtree 1",
          subTreeNodes: []
        },
        {
          value: "Subtree 2",
          subTreeNodes: []
        }
      ]
    };
}
