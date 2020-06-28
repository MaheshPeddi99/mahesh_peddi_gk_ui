import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './loader-interceptor.service';

@NgModule({
   declarations: [
      AppComponent,
      HierarchyComponent,
      CustomerComponent,
      OrdersComponent,
      LoginComponent,
      ContentComponent,
      HeaderComponent,
      LoaderComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatTreeModule,
      MatIconModule,
      MatSnackBarModule,
      MatProgressSpinnerModule
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: LoaderInterceptorService,
         multi: true
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
