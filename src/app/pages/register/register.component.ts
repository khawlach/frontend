import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    constructor(
      private http:HttpClient
    ){

    }
    ngOnInit() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('register-page');
      body.classList.add('off-canvas-sidebar');
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('register-page');
      body.classList.remove('off-canvas-sidebar');
    }

register(form:NgForm){
  console.log(form);
  let client =form.form.value
  console.log(client);
  return this.http.post(environment.adress_symfony+'register',client).subscribe(
    (data:any)=>{
      console.log(data);

    },
    (error)=>{
      console.log(error);

    }
    )
  
  


}

}
