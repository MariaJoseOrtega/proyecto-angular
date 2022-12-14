import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';

const routes: Routes = [
    //Rutas Protegidas
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
