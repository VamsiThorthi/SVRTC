import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LabellingComponent } from '../labelling/labelling.component';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  name!: string;
  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }


  signin: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide = true;
  get userNameInput() { return this.signin.get('userName'); }
  get passwordInput() { return this.signin.get('password'); }

  onSubmit() {
    console.log(this.userNameInput?.value)
    console.log(this.passwordInput?.value)
    this.signupService.getByNameAndPassword(this.userNameInput?.value, this.passwordInput?.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/dept-home');
      }, (error) => {
        console.log(error)
      }
    )

  }

}
