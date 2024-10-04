import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private fb:FormBuilder , private router:Router){}

currentuser=sessionStorage.getItem("username")
currentpassword=sessionStorage.getItem("password")
loginForm:FormGroup=this.fb.group({
  username:[''],
  password:['',]
})
onLogin(form:FormGroup){
    const localData = sessionStorage.getItem('ExistingUsers')
    
    if(localData !=null){
      const users=JSON.parse(localData)
      const isUserFound=users.find((user:any)=>user.username==this.loginForm.value.username && user.password == this.loginForm.value.password)
      if(isUserFound){
        alert('user found')
        this.router.navigateByUrl('/dashboard')
      }else{
        console.error('user not found')
      }
    }else{
      const user=[];
      user.push(this.loginForm.value)
      
      sessionStorage.setItem('ExistingUsers',JSON.stringify(user))
      alert('new user  inserted ')
    }
    sessionStorage.setItem("username",form.value.username)
    sessionStorage.setItem("password",form.value.password)
    console.log(form.value)
    console.log(form.status)
    console.log('username:'+ form.value.username)
    console.log('password:'+ form.value.password)
  
}
}
