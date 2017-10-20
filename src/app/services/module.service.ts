import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Module} from '../model/Module';

@Injectable()
export class ModuleService {

	private host="http://localhost:3000/";
	constructor(private http: Http){
		console.log("Service Created");
	}
	
	public do():void{
		console.log("sdfd");
	}
	
	public getListModules(queryData:string):Observable<Module[]>{
		var path="webapp/"+queryData+"/modules";
		return this.http.get(this.host+path).map((res:Response)=>{
			  return res.json().modules;
		}).catch((error:any) => {
			  return Observable.throw(error.json().error || 'Server error')
		});

	}

}
