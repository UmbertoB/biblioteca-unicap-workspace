import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { Toast } from 'app/lib/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  public loadingLogin: boolean = false;
  public loginButton = "Entrar";

  public currentYear = new Date();
  public currentVersion = '1.0.0';

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: Toast,
  ) { }

  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
      return;
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  public login() {

    if (this.loginForm.valid) {
      this.loadingLogin = true;
      this.loginButton = 'Entrando';

      this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          (res) => {
            this.toast.success('Bem-vindo');
            this.loadingLogin = false;
            this.loginButton = 'Entrar';
            const token: string = JSON.stringify({ token: res.token, timeLogin: new Date().getTime() });
            this.authService.createTokenData(token);
            this.router.navigate(['dashboard']);
          },
          () => {
            this.toast.warning('Email ou Senha inválido');
            this.loadingLogin = false;
            this.loginButton = 'Entrar';
          });
    }
  }

}
