import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Module
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from './shared/common/common-shared.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';

// Material
import { MaterialModule } from './shared/material/material.module';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

// Common Page
import { LoginPageComponent } from './pages/common-page/login-page/login-page.component';
import { RegisterPageComponent } from './pages/common-page/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/common-page/not-found-page/not-found-page.component';
import { AuthService } from './apis/auth/auth.service';
import { ProductService } from './apis/product/product.service';
import { ActiveEffectDirective } from './directives/active-effect.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ActiveEffectDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    CommonSharedModule,
    HomePageModule,
    AdminPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
