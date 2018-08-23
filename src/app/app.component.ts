import { Component, ElementRef, AfterViewChecked } from '@angular/core';
import { VERSION } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  constructor(private elementRef: ElementRef) {
    console.log(VERSION.full);
  }

  ngAfterViewChecked() {
    var _script = document.createElement("script");
    _script.type = "text/javascript";
    _script.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(_script);

  }
}
