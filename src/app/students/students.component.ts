import { HttpServerService } from './../Services/http-server.service';
import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public students: any[] = [];

  constructor(
    private common: CommonService,
    private HttpServerService: HttpServerService
  ) {}

  ngOnInit(): void {
    this.HttpServerService.getStudents().subscribe((data) => {
      console.log('getStudents', data);
      this.students = data;
    });
  }
}
