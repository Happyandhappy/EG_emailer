import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public service:ApiService) { }
  public Name = "";
  public Business = "";
  public Phone = "";
  public Email = "";
  public Message = "";
  public res: any;
  title = 'emailapp';
  public disable = false;

  sendEmail(){
    console.log(this.Name);
    console.log(this.Business);
    console.log(this.Phone);
    console.log(this.Email);
    console.log(this.Message);
    this.disable = true;
    var content = " Name : " + this.Name + "\n Business : " + this.Business + "\n Phone : " + this.Phone + "\n Email : " + this.Email + "\n Message : " + this.Message;
    this.service.sendEmail(this.Email,content).subscribe((res) => {
      this.disable = false;
      this.res = res;
    });
  }
}
