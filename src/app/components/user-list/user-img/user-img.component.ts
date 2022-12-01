import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {
  @Object() childEvent = new EventEmitter<any>()
  @Input("user") user:any;
  onBtnClick(){
    this.childEvent.emit(this.user)
  }
}
