import { Component,OnInit,ViewChild } from '@angular/core';
import {MenuItem,TreeNode} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


    filesTree: TreeNode[];

    ngOnInit() {
      this.filesTree = [
        {
          label: "Documents for implement",
          data: "Documents Folder",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder",
          children: [{
                  label: "Work",
                  data: "Work Folder",
                  expandedIcon: "fa fa-folder-open",
                  collapsedIcon: "fa fa-folder",
                  children: [{"label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document"}]
              },
              {
                  label: "Home",
                  data: "Home Folder",
                  expandedIcon: "fa fa-folder-open",
                  collapsedIcon: "fa fa-folder",
                  children: [{"label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month"}]
              }]
      },

      ];
    }
  

}
