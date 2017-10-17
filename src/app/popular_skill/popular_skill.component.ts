import { Component } from '@angular/core';
import {MatSidenavModule,MatGridListModule} from '@angular/material';
import {AssesmentService} from '../services/assesment.service'
import {Domain} from '../model/Domain';
@Component({
  selector: 'popular_skill',
  templateUrl: './popular_skill.component.html',
  styleUrls: ['./popular_skill.component.css']
})
export class PopularskillComponent {
	public isDataAvailable=false;
	public domainModel:Array<Domain>;
	
	constructor(private aSerivce:AssesmentService){
		console.log("PopularskillComponent");
	}

	ngOnInit() {
		this.aSerivce.getPopularSkill().subscribe((response)=>{
			this.domainModel=response;
			this.isDataAvailable=true;
			
		});
	}
}
