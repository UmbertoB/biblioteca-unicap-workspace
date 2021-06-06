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

  public loadingButton: boolean = false;
  public loginButton = "Entrar";
  public registerButton = "Cadastrar";

  public isRegister = false;

  public currentYear = new Date();
  public currentVersion = '1.0.0';

  public loginForm: FormGroup;
  public registerForm: FormGroup;

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

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    });

  }

  public login() {

    if (this.loginForm.valid) {
      this.loadingButton = true;
      this.loginButton = 'Entrando';

      this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          (res) => {
            this.toast.success('Bem-vindo');
            this.loadingButton = false;
            this.loginButton = 'Entrar';
            const token: string = JSON.stringify({ token: res.token, timeLogin: new Date().getTime() });
            this.authService.createTokenData(token);
            this.router.navigate(['dashboard']);
          },
          () => {
            this.toast.warning('Email ou Senha inválido');
            this.loadingButton = false;
            this.loginButton = 'Entrar';
          });
    }
  }

  public register() {

    if (this.registerForm.valid) {
      this.loadingButton = true;
      this.registerButton = 'Cadastrando';

      this.authService.registerUser(this.registerForm.value)
        .subscribe(
          (res) => {
            this.toast.success('Cadastrado com Sucesso!');
            this.loadingButton = false;
            this.isRegister = false;
            this.registerButton = 'Cadastrar';
            this.registerForm.reset();
          },
          () => {
            this.loadingButton = false;
            this.registerButton = 'Cadastrar';
          });
    }
  }

  setRegister(state: boolean) {
    this.isRegister = state;           
    this.registerForm.reset();
  }

}
