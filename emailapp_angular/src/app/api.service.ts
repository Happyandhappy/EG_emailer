import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Config } from './config';
import { observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( public http:Http) { }

  public sendEmail(from, content){
		let input = new FormData();
		// Add your values in here
		input.append('from', from);
		input.append('content', content);
  	return this.http.post(Config.API_BASE + "index.php",input)
			.pipe(
				tap((res) => {return res;}) 
			)
  }
}

