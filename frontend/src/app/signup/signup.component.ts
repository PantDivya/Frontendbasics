import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
