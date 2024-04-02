import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email,Validators.pattern(/^[\w-]+@([\w-]+\.)*[a-zA-Z]{2,7}$/)]],
      password : ['', [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.login.controls;
  }

  OnSubmit() : void{
    this.submitted = true;
    if(this.login.invalid){
      return console.log("Login not successful");
    }
  }

}

