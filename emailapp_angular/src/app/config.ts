import { Http, Headers, RequestOptions } from '@angular/http';
let headers: Headers = new Headers()
let options: RequestOptions = new RequestOptions()
headers.append("Content-type", "application/json")
options.headers = headers
export const Config = Object.freeze({
    API_BASE: "http://localhost/emailer/",
    // API_BASE: "https://hendygem-upwork.herokuapp.com/",
    //API_BASE: "https://www.handygems.com/",	
	HTTP: {
		options: options
    }
});