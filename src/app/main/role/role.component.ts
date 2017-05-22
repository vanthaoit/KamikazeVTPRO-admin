import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpProviderService } from '../../core/services/http-provider.service';
import { NotificationService } from '../../core/services/notification.service';
import { MessageConstants } from '../../core/common/message.constants';

import { PageConstants } from '../../core/common/page.constants';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  @ViewChild('createUpdateModal') public createUpdateModal: ModalDirective;
  public orderIndex: number = 1;
  public pageIndex: number = 1;
  public pageSize: number = PageConstants.PAGE_SIZE;
  public maxSize: number = PageConstants.MAX_SIZE;
  public totalPages: number = 10;
  public filter: string = "";
  public roles: any[];
  public entity: any;

  constructor(private _httpProviderService: HttpProviderService, private _notificationService: NotificationService) {

  }

  ngOnInit() {
    this.loadData();

  }
  loadData() {
    this._httpProviderService.get("/api/applicationRole/getListPaging?page=" + this.pageIndex + "&pageSize=" + this.pageSize + "&filter=" + this.filter)
      .subscribe(result => {
        this.roles = result.Items,
          this.totalPages = result.TotalPage,
          this.pageIndex = result.Page;
        this.orderIndex = result.TotalCount;
        console.log("items=" + result.Items);

      }, error => {
        console.log("error= " + error);
        this._notificationService.displayErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      });
  }
  pageChanged(index: any): void {
    this.pageIndex = index.page;
    this.loadData();
  }
  showModal() {
    this.entity = {};
    this.createUpdateModal.show();
    
  }
  saveChange(isValid: boolean) {

    if (isValid) {
      if (this.entity.Id == undefined) {
        this._httpProviderService.post("/api/applicationRole/add", this.entity)
          .subscribe(result => {
            this.loadData();
            this.createUpdateModal.hide();
            this._notificationService.displaySuccessMessage(MessageConstants.CREATED_OK_MSG);
          }, error => {
            this._notificationService.displayErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
          });
      }

    }
  }

}
