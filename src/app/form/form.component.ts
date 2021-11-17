import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public players = ['Hazard','Oscar','Lukaku','Havert','Pulisic'];
  private selectedPlayer = '';


  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    //khai báo function onSubmit
    console.log('onSubmit');
    console.log('name = '+ this.name);
    console.log('password = '+ this.password);
    console.log('selectedPlayer = '+ this.selectedPlayer);
  }

  public selectPlayer(event: any) {
    console.log('selectPlayer', event.target.value);
    this.selectedPlayer = event.target.value;
  }

}
