import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderFormPageComponent } from './pages/order-form-page/order-form-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as AppReducer from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './core/components/order-list/store/order.effects';




@NgModule({
  declarations: [
    AppComponent,
    OrderFormPageComponent,
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
      responseType: 'token id_token',
      audience: 'http://localhost:3001',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:3001/*',
            tokenOptions: {
              audience: 'http://localhost:3001',
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    NgbModule,
    StoreModule.forRoot(AppReducer.appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([OrdersEffects])

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
