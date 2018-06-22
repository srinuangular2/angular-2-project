import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public myarray=[];
  numberofpage:number= 10;
  text;
  p: number = 1;
  constructor(private srinu:HeroService) { }

  ngOnInit() {
    this.allcountries()
  }
  allcountries(){
    this.srinu.getclist().subscribe(
    (data)=>{
      
    this.myarray=data.json();
    console.log(this.myarray)
    
    },
    error=>alert(error),
    ()=>console.log("completed service")
    
    )
    
    }
    

}