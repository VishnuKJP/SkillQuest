import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HeadComponent} from '../head/head.component';
import * as CryptoJS from 'crypto-js';;


@Component({
  selector: 'environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit{
	
	private domain:string;
	private module:string;
	private sub:any;
	constructor(private router: Router) { 
	console.log("EnvironmentComponent Created");
	
  }

  
  ngOnInit() {
	  
	console.log("EnvironmentComponent Loaded");
	console.log("TestComponent");
	 
	//ENCRYPTED LINK
	//var testLink = CryptoJS.AES.encrypt('vivekanandan', 'KEY');
	var testLink = CryptoJS.HmacSHA512("Message", "KEY")
	
	//DECRYPTED LINK
	var bytes  = CryptoJS.AES.decrypt(testLink.toString(), 'KEY');
	//var plaintext = bytes.toString(CryptoJS.enc.Utf8);
	
	console.log("ENCRYPTED LINK:\t"+testLink.toString());
	//console.log("DENCRYPTED LINK: \t"+plaintext);
	
	
	//NAVIGATE TO SUITE
	this.router.navigate(['./assessment/java/scjp/'+testLink]);
	
  }

}
