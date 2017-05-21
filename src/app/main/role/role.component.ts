import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public pageIndex: number = 3;
  public pageSize: number = 1;
  public maxSize:number = 5;
  public totalPages: number=10;
  public filter: string = '';
  public roles: any[];

  constructor() { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){

  }
  pageChanged(index:any):void{
    this.pageIndex = index.page;
    this.loadData();
  }

}
