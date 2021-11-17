import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private HttpServerService: HttpServerService) { }

  public ngOnInit(): void {
    const payload = {"body": "some status 3", "postId": 3 };
    this.HttpServerService.postComments(payload).subscribe(data =>{
      console.log('PostComment', data);
    });
  }

  // Note: chạy json-server giả: "json-server --watch tên.json"
}
