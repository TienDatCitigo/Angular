import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private HttpServerService: HttpServerService) { }

  public ngOnInit(): void {
    this.HttpServerService.getComments().subscribe((data) =>{
      console.log('getComment', data);
    });

    this.HttpServerService.getRandomUser(5).subscribe((data) =>{
      console.log('getRandomUsers', data.results);
    });
  }
}
