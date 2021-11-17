import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Dịch vụ dùng chung
export class CommonService {
  public age = 17;
  constructor() { }

  public tangTuoi(){
    this.age++;
  }
}
