
import {Option} from '../model/Option';
export class Question {
	
	public questionNo:string;
	public question:string;
	public answer:string;		
	public options:Array<Option>;
	public chosen:string;
	
	constructor(){
	}
	
}