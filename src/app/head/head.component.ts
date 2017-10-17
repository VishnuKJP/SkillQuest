import { Component ,ViewEncapsulation} from '@angular/core';
import {MatSidenavModule} from '@angular/material';
@Component({
  selector: 'head-comp',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
   encapsulation: ViewEncapsulation.None,
})
export class HeadComponent {
	constructor(){
		console.log("HeadComponent Loaded");
	}
}
