import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../model/treeNode';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input()
  treeNode!: TreeNode;

  newTreeNodeValue: string = '';
  editTreeNodeValue: string = '';

  isAddingMode = false;
  isEditingMode = false;

  constructor() { }

  ngOnInit() {
    this.editTreeNodeValue = this.treeNode.value;
  }

  addTreeNode() {
    if(this.newTreeNodeValue !== ''){
      this.treeNode.subTreeNodes.push({
        value: this.newTreeNodeValue,
        subTreeNodes: []
      })
      this.isAddingMode = false;
    } else {
      alert('Tree node cannot be empty!');
    }
  }

  cancelAddTreeNode() {
    this.isAddingMode = false;
    this.newTreeNodeValue = '';
  }

  editTreeNode() {
    if(this.editTreeNodeValue !== ''){
      this.treeNode.value = this.editTreeNodeValue;
      this.isEditingMode = false;
    } else {
      alert('Tree node cannot be empty!');
    }
  }

  cancelEditTreeNode() {
    this.isEditingMode = false;
    this.editTreeNodeValue = this.treeNode.value;
  }

  deleteTreeNode() {
    this.treeNode = {
      value: '',
      subTreeNodes: []
    };
  }

}
