import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import {Router} from '@angular/router'
@Component({
    selector: 'timer',
	templateUrl: './timer.component.html',
     styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    ticks:number = 1;
    minutesDisplay: string = '10';
    hoursDisplay: string = '00';
    secondsDisplay: string = '00';

    sub: Subscription;
	constructor(private router: Router){
	}
	
    ngOnInit() {
        this.startTimer();
    }

    private startTimer(){
		var toSeconds=this.ticks*60;
        let timer = Observable.timer(1, 1000);
		
        this.sub = timer.subscribe(
            t => {
				if(toSeconds<0){
					
					console.log("Forcing the Suite to Close")
					this.router.navigate(['./home']);
				}
				var hours,minutes,sec;
				var time=toSeconds;
				hours=Math.floor(toSeconds/(60*60));
				time=Math.floor(toSeconds%(60*60));
				
				minutes=Math.floor(time/(60));
				time=Math.floor(toSeconds%(60));
				
				sec=time;
				
				toSeconds--;
				
				this.hoursDisplay=((hours>1)?("00"):("0"+hours));
				this.minutesDisplay=((minutes<10)?("00"):(""+minutes));
				this.secondsDisplay=((sec<10)?("00"):(""+sec));
				
            }
        );
    }
	private  goNavigate(){
		this.router.navigate(['./home']);
	}
}
