import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar, {static: false}) progressBar: MatProgressBar;
  @ViewChild(MatButton, {static: false}) submitButton: MatButton;

  signinForm: FormGroup;
  headers: any;

  constructor(private service:AuthService,private route:Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    let data = btoa(this.signinForm.value.username+':'+this.signinForm.value.password)
    this.service.login(data).subscribe(res=>{
    

        if(res['body'].code == '200'){
          const keys = res.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${res.headers.get(key)}`);
             let access= this.headers[0].split(':')[1];
             sessionStorage.setItem('access',access)
             sessionStorage.setItem('user',res['body'])
             this.route.navigate(['dashboard/analytics']);
        }

    })
  }

}
