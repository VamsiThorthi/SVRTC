import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading = false;
  submitted = false;
  genders = ["Male", "Female", "Others"]

  constructor(private signupService: SignupService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

  }

  signUp = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  hide = true;
  


  signUpform = new FormGroup({

  })

  get email() {
    return this.signUp.get('email')
  }
  get password() {
    return this.signUp.get('password')
  }

  get lastName(){
    return this.signUp.get('lastName')
  }
  get gender(){
    return this.signUp.get('gender')
  }

  get firstName(){
    return this.signUp.get('firstName')
  }
  get userName(){
    return this.signUp.get('userName')
  }
  
  getErrorMessage() {
    return this.email?.hasError('required') ? 'Enter your email' :
      this.email?.hasError('email') ? 'Not a valid email' : ""
  }

  getFirstNameError(){
    return this.firstName?.hasError('required') ? 'enter first name' :
    this.firstName?.hasError('pattern') ? 'only aplahbets allowed' : ""
  }

  getLastNameError(){
    return this.lastName?.hasError('required') ? 'enter last name' :
    this.lastName?.hasError('pattern') ? 'only aplahbets allowed' : ""
  }

  getPasswordError(){
    return this.password?.hasError('required') ? 'Enter your password' :
    this.password?.hasError('minLength') ? 'only above 6 chars are allowed' : ''
  }


  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    // if (this.signUpform.invalid) {
    //     return;
    // }

    // this.loading = true;
    console.log(this.signUp.value);
    this.signupService.register(this.signUp.value)
      // .pipe(first())
      .subscribe(
        (data) => {
          // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
          console.log(data)
        },
        (error) => {
          // this.alertService.error(error);
          this.loading = false;
          console.log(error);
        }
      );
      this.router.navigate(['/dept-home']);
  }
  

}
