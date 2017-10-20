import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Domain} from '../model/Domain';
@Injectable()
export class AssesmentService {

      private host ="http://localhost:3000/";	
      private path ="webapp/assessment"
      constructor(private http: Http) {
        console.log("Assessment Service Invoked");
      }
      getPopularSkill(): Observable<Domain[]> {
        return this.http.get("http://localhost:3000/webapp/assessment").map((res: Response) => {
          if (res.json().status == true)
            return res.json().domains;
          else
            return Observable.throw('Server error');
        }).catch((error: any) => {
          return Observable.throw(error.json().error || 'Server error');
        });

      }

}
