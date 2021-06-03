import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from './ui/shared/sidebar/sidebar.module';
import { NavbarModule } from './ui/shared/navbar/navbar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './ui/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { TokenInterceptor } from './services/auth/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
