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
  showDetail(id: string) {
    this._httpProviderService.get("/api/applicationRole/getDetail?id=" + id)
      .subscribe(result => {
        this.entity = result;
        console.log("result=" + JSON.stringify(result));
        this.createUpdateModal.show();
      }, error => {
        this._notificationService.displayErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      });
  }
  saveChange(isValid: boolean) {
    var data = JSON.stringify(this.entity);
    if (isValid) {
      if (this.entity.Id == undefined) {
        this._httpProviderService.post("/api/applicationRole/add", data)
          .subscribe(result => {
            this.loadData();
            this.createUpdateModal.hide();
            this._notificationService.displaySuccessMessage(MessageConstants.CREATED_OK_MSG+" "+ result.Name);
          }, error => {
            this._httpProviderService.handleError(error);
          });
      } else {
        this._httpProviderService.post("/api/applicationRole/update", data)
          .subscribe(result => {
            this.loadData();
            this.createUpdateModal.hide();
            this._notificationService.displaySuccessMessage(MessageConstants.UPDATED_OK_MSG+ " "+result.Name);
          }, error => {
            this._httpProviderService.handleError(error);
          });
      }

    }
  }
  deleteRole(id: string) {
    this._notificationService.displayConfirmDialog(MessageConstants.CONFIRM_DELETE_MSG, () => {
      this._httpProviderService.delete("/api/applicationRole/delete", "id", id).subscribe(result => {
        this._notificationService.displaySuccessMessage(MessageConstants.DELETED_OK_MSG+ " "+ result);
        this.loadData();
      }, error => {
        this._httpProviderService.handleError(error);
      });
    });
  }

}
