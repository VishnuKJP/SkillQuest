import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HeadComponent} from '../head/head.component';
import { ModuledataService } from '../module_data/moduledata.service';
import { ModuleService } from '../services/module.service';
import { TestService } from '../services/test.service';
import { Module } from '../model/Module';
import { Test } from '../model/Test';
@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit , OnDestroy{

	  public  modulesList:Array<Module>;
	  public queryData:string;
	  public modulesRetrived:boolean=false;
    public module: string;

    constructor(private router:Router,private route: ActivatedRoute, private moduleService: ModuleService, private testService: TestService) {
      console.log("Module Component , Constructor Method Executed");
    }
	
    ngOnInit() {
      var s = "s";
      this.route.params.subscribe(res => s = res.module);
      this.moduleService.getListModules(s).subscribe((res: Module[]) => {
        console.log("Data Retrived");
        console.log(res);
        this.modulesList = res;
        this.modulesRetrived = true;
      });
      console.log("All requested completed");
    }

    ngOnDestroy() {

      console.log("Module Component , Destory Method Executed");
    }

    onClick(module: Module): void {
      this.testService.getTestID(module).subscribe((res) => {
        console.log("Test ID Retrived");
        console.log(res);
        this.router.navigate(['./test/' + res]);
      });
    }
}
