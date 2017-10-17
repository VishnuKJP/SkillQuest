import { Component ,ViewEncapsulation} from '@angular/core';
import {MatSidenavModule,MatGridListModule,MatAutocompleteModule,MatCardModule,MatButtonModule} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {HeadComponent} from '../head/head.component';
import * as CryptoJS from 'crypto-js';;



@Component({
  selector: 'assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
	
	constructor() 
	{
		console.log("AssessmentComponent");
		console.log("loading..");
	}
}
