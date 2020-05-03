import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { BookComponent } from './book/book.component';
import { BookService } from './providers/book.service';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'books', component: BookComponent },
];

@NgModule({
  declarations: [AppComponent, FooterComponent, LoginComponent, BookComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AuthService, BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
