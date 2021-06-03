import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoginLayoutRoutes } from './login-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(LoginLayoutRoutes),
  ],
  declarations: []
})

export class LoginLayoutModule {}
