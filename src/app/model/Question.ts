import { Option } from '../model/Option';
export class Question {
	
	public _id:string;
	public question:string;
    public answer: string;
    public options: Array<string>;
	public chosen:string;
	
	constructor(){
	}
	
}
