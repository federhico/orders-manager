import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    routing,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'ordersmanager.us.auth0.com',
      clientId: 'lLoqKQBWhXXCETs8BI9L24yBr0B3UdaT',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      audience: 'http://localhost:3001',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:3001/*',
            tokenOptions: {
              audience: 'http://localhost:3001/',
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    NgbModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
