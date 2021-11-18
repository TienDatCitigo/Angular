import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss'],
})
export class ChaComponent implements OnInit {
  public chatMessage = '';
  @ViewChild('thangTien') thangTien: ConComponent | undefined;
  @ViewChild('thangDat') thangDat: ConComponent | undefined;

  constructor() {}

  ngOnInit(): void {}
  public conGoi(name: string) {
    this.chatMessage = 'Tao nghe ' + name + ' ơi';
    console.log(' Gọi gì đấy ' + name + ' ơi');
  }

  public xinTien() {
    this.thangTien?.xinTien(60);
    this.thangDat?.xinTien(100);
  }
}
