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
export class SuiteComponent implements OnInit {
	question:Question;
	
	questionTank:Array<Question>=[
		{
			questionNo	:'1',
			question	:'1.Which of the following seperator is used to enclose the parameter in method definition and invocation?',
			answer		:'Braces',
			options		:[{value:'Braces'},{value:'Brackets'},{value:'Square'},{value:'Vivek'}],
			chosen		:''
			
		},
		{
			questionNo	:'2',
			question	:'2. Which of the following seperator is used to enclose the parameter in method definition and invocation?',
			answer		:'Braces',
			options		:[{value:'Braces'},{value:'Brackets'},{value:'Square'},{value:'Curly'}],
			chosen		:''
			
		},
		{
			questionNo	:'3',
			question	:'3. Which of the following seperator is used to enclose the parameter in method definition and invocation?',
			answer		:'Braces',
			options		:[{value:'Braces'},{value:'Brackets'},{value:'Square'},{value:'Curly'}],
			chosen		:''
			
		},
		{
			questionNo	:'4',
			question	:'4. Which of the following seperator is used to enclose the parameter in method definition and invocation?',
			answer		:'Braces',
			options		:[{value:'Braces'},{value:'Brackets'},{value:'Square'},{value:'Curly'}],
			chosen		:''
			
		}
	];
	
	heroes=[
				{value:'Brackets'},
				{value:'Braces'},
				{value:'Square'},
				{value:'Curly'}
			];
	
	
	counter=0;
	
	constructor() {
		console.log("SuiteComponent has been Successfully Created");
	}

	ngOnInit() {
		
		console.log("SuiteComponent has been Successfully Loaded");
		this.questionTank.forEach(question=>{
				question.options.forEach(option=>{
					option["state"]='inactive';
				});
			}
		);
		
		this.question=this.questionTank[this.counter];
		
	}
	
	toggleState(q,selected){
		console.log("Trying to Toggle State");
		var index=0;
		var loop=false;
		this.question.options.forEach(option=>{
		
				if(option['value']==selected['value']){
					if('active'==selected['state']){
						this.question.options[index]['state']='inactive';
						this.question.chosen='';
					}
					else{
						this.question.options[index]['state']='active';
						this.question['chosen']=this.question.options[index]['value'];
						console.log(this.question);
					}
					loop=true;
				}
				else{
					this.question.options[index]['state']='inactive';
					
				}
			index++;
		});
		this.questionTank[this.counter]=this.question;
		
		
		
	}
	
	goFirst(){
		console.log("Navigating to First Question");
		this.question=this.questionTank[0];
		this.counter=0;
		
	}
	
	goLast(){
		console.log("Navigating to Last Question");
		this.question=this.questionTank[this.questionTank.length-1];
		this.counter=this.questionTank.length-1;
	}
	
	goNext(){
		console.log("Navigating to Next Question");
		this.counter++;
		if(this.counter<this.questionTank.length){
			this.question=this.questionTank[this.counter];
		}
		else
			this.counter=this.questionTank.length-1;
	}
	
	goPrevious(){
		console.log("Navigating to Previous Question");
		this.counter--;
		if(this.counter>=0){
			this.question=this.questionTank[this.counter];
		}
		else{
			this.counter=0;
		}
	}
	
	goCalculate(){
		var score=0;
		this.questionTank.forEach(question=>{
			if(question.answer==question.chosen){
				score++;
			}
		});
		console.log(score);
			
	}
}
