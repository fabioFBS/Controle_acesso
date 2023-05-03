import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from 'src/app/shared/interfaces/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fomrBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar) {

    this.loginForm = this.fomrBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendForm() {
    var body: Users = {
      name: this.loginForm.value.name,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    var user = this.authService.createLogin(body)
    this.snackBar.open(`User created success: ${user}`, "Close", {
      duration: 2000,
    });
  }

}
