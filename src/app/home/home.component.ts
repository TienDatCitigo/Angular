import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Đạt Nguyễn';
  // public age = 20.123201;
  public age;
  public players = ['Hazard','Oscar','Lukaku','Havert','Pulisic'];

  //Sử dụng Service trong Angular
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {
  }

  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
    // if(this.age === 22){
    //   this.name = "Đạt của hiện tại";
    // }

    this.players.push(this.name + ': ' + this.age);
    // đẩy thêm tên cộng tuổi vào Mảng
  }

}
