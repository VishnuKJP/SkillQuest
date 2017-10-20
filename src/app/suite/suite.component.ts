import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {Question} from '../model/Question';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {Observable} from 'rxjs/Rx';
@Component({
	animations: [
				  trigger('heroState', [
					state('inactive', style({
					  backgroundColor: '#ffffff',
					  transform: 'scale(1)',
					})),
					state('active',   style({
					  backgroundColor: '#598dca',
					  transform: 'scale(1.001)',
					  color: '#ffffff'
					})),
					transition('inactive => active', animate('900ms ease-in')),
					transition('active => inactive', animate('100ms ease-out'))
				  ])
				],
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent  {
	
}
