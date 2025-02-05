import { Component,OnInit,ViewChild } from '@angular/core';
import {TreeModule,TreeNode} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    
  files: TreeNode[];
  selectedFile: TreeNode;
  
  ngOnInit() {
      /* this.nodeService.getFiles().then(files => this.files = files); */

      this.files = [
        {
          label: "Pasta",
          expandedIcon: "fa fa-folder-open",
          collapsedIcon: "fa fa-folder",
          children: [{
                  label: "Sub Pasta 1",
                  data: "Work Folder",
                  expandedIcon: "fa fa-folder-open",
                  collapsedIcon: "fa fa-folder",
                  children: [{
                    "label": "Arquivo 1.txt", 
                    "icon": "fa fa-file-word-o",
                      "data": "../assets/icones/download.svg"
                    }, 
                      {
                        "label": "Arquivo 2.txt",
                        "icon": "fa fa-file-word-o", 
                        "data": "Resume Document"}]
              },
              {
                  label: "Sub Pasta 2",
                  data: "Home Folder",
                  expandedIcon: "fa fa-folder-open",
                  collapsedIcon: "fa fa-folder",
                  children: [{"label": "Arquivo.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month"}]
              }]
        },
      ];


  }

  

  nodeSelect(event) {
    alert("Abre documento")
}

}