import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm:FormGroup;
  uname; 
  email;
  pwd;
  phn; 
  loc; 
  constructor(private myBulid:FormBuilder) {

    this.regForm=this.myBulid.group({
      uname:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      pwd:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(6)]), 
      phn:new FormControl(null,[Validators.required]),     
      gender:new FormControl(null,[Validators.required]),      
      loc:new FormControl(null,[Validators.required])
    });
   }

  ngOnInit() {
  }
  postData(data){

    console.log(data);
    
      }
}
