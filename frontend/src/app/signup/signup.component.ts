import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  signup : FormGroup = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    password : new FormControl('')
  });
  submitted : boolean = false;

  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit() : void{

    //Country code selector
    const input = document.querySelector('#phone');

    if(input){
      intlTelInput(input,{ 
        initialCountry : 'nepal',
        separateDialCode : true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
      });
    }
  

    // Validation
    this.signup = this.formBuilder.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password : ['', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signup.controls;
  }
  
  OnSubmit(){
    this.submitted = true;
    console.log("hello");
  }

}
