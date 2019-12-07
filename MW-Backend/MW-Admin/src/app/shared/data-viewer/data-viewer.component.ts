import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html'
})
export class DataViewerComponent {
  @Input('data') data: any;
  closed = false;
  
  constructor() { }
}
