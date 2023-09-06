import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit{
  isOnline:boolean ;
  status: string;
  myPromise: any;

  constructor(){
    this.status = 'offline';
    this.isOnline = false;
  }

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then((res: any) => {
      console.log(res);
      this.checkLogic();
    }, (err: any) => {
      console.log(err);
    });
  }

  getStatus(){
    console.log("get Status called")
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() =>{
        console.log("Received Status Value")
        this.isOnline = true;
        // resolve(this.isOnline);
        reject("DB Connection Failed")
      }, 3000)
    })
  }

  checkLogic(){
    console.log("Check Logic called")
    if(this.isOnline){
      this.status = "online";
    }else{
      this.status = 'offline';
    }
  }
}
