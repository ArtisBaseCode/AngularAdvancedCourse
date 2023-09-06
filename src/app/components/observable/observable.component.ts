import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{
  data: number[];
  count:number;
  myObservable: any;

  constructor(){
    this.count = 0;
    this.data = [];
  }

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer) => {
      setInterval(() => {
        this.count++;
        this.data.push(this.count);
        if(this.count < 5){

          observer.next(this.data);
        }else{
          //  observer.complete();
          observer.error('DB timeout')
        }
      }, 1000)
    })  
  }
  getData(){
    this.myObservable.subscribe((res: any) => {
      console.log(res);
    },
    (err: any) =>{
      console.log(err);
    },
    () => {
      console.log('Completed');
    });
    console.log(this.data);
  }
}
