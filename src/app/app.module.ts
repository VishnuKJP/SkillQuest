import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule ,MatSidenavModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModuleComponent } from './module/module.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PopularskillComponent } from './popular_skill/popular_skill.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { AccountComponent } from './account/account.component';
import { EnvironmentComponent } from './environment/environment.component';
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ModuledataService } from './module_data/moduledata.service';
import { SuiteComponent } from './suite/suite.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { AssesmentService } from './services/assesment.service';
import { ModuleService } from './services/module.service'
import { StorageService } from './services/storage.service'


export const ROUTES: Routes = [
	 {  path: '', redirectTo: '/home' ,pathMatch:'full' },
	 { path: 'home', component: HomeComponent },
	 { path: 'account', component: AccountComponent },
	 { path: 'assessment', component: AssessmentComponent },
	 { path: 'assessment/:module', component: ModuleComponent},
	 { path: 'assessment/:module/:test', component: EnvironmentComponent},
	 { path: 'assessment/:module/:test/:testID', component: SuiteComponent}
	
	 
	 
];

@NgModule({
  declarations: [
    AppComponent,
	AssessmentComponent,
	HeadComponent,
	AccountComponent,
	PopularskillComponent,
	HomeComponent,
	ModuleComponent,
	EnvironmentComponent,
	SuiteComponent,
	TimerComponent],
  imports: [
    BrowserModule,
	HttpModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatCardModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule ,
	FlexLayoutModule,
	MatSidenavModule,
	 RouterModule.forRoot(ROUTES,{ useHash: true })
	
  ],
	providers: [ModuleService,AssesmentService,ModuledataService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
