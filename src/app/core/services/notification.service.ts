import { Injectable } from '@angular/core';
import {MessageConstants} from '../common/message.constants';
declare var alertify: any;
@Injectable()
export class NotificationService {

  private _notification: any = alertify;

  constructor() {
    alertify.defaults = {
      // dialogs defaults
      autoReset: true,
      basic: false,
      closable: true,
      closableByDimmer: true,
      frameless: false,
      maintainFocus: true, // <== global default not per instance, applies to all dialogs
      maximizable: true,
      modal: true,
      movable: true,
      moveBounded: false,
      overflow: true,
      padding: true,
      pinnable: true,
      pinned: true,
      preventBodyShift: false, // <== global default not per instance, applies to all dialogs
      resizable: true,
      startMaximized: false,
      transition: 'pulse',

      // notifier defaults
      notifier: {
        // auto-dismiss wait time (in seconds)  
        delay: 5,
        // default position
        position: 'top-right',
        // adds a close button to notifier messages
        closeButton: false
      },

      // language resources 
      glossary: {
        // dialogs default title
        title: MessageConstants.TITLE_DIALOG,
        // ok button text
        ok: MessageConstants.OK_DIALOG,
        // cancel button text
        cancel: MessageConstants.CANCEL_DIALOG
      },

      // theme settings
      theme: {
        // class name attached to prompt dialog input textbox.
        input: 'ajs-input',
        // class name attached to ok button
        ok: 'ajs-ok',
        // class name attached to cancel button 
        cancel: 'ajs-cancel'
      }
    };


  }

  displaySuccessMessage(message: string) {
    alertify.alert(MessageConstants.TITLE_DIALOG, message, function(){ alertify.success(message); });

  }
  displayErrorMessage(message: string) {
    this._notification.error(message);

  }
  displayInfoMessage(message: string) {
    this._notification.message(message);
  }
  displayWarningMessage(message: string) {
    this._notification.warning(message);
  }
  displayConfirmDialog(message: string, okCallBack: () => any) {
    this._notification.confirm(message, function (response) {
      if (response) {
        okCallBack();
      } else {

      }
    });
  }
  printSuccessMessage(message: string) {

    this._notification.success(message);
  }

  printErrorMessage(message: string) {
    this._notification.error(message);
  }

  printConfirmationDialog(message: string, okCallback: () => any) {
    this._notification.confirm(message, function (e) {
      if (e) {
        okCallback();
      } else {
      }
    });
  }
}
