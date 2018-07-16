import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { WizardModule } from './wizard/wizard.module';
import { ServerModule } from './server/server.module';
import { PluginModule } from './plugin/plugin.module';
import { TaskModule } from './task/task.module';
import { MovieModule } from './movie/movie.module';
import { ShowModule } from './show/show.module';
import { LogsModule } from './logs/logs.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCER, META_REDUCERS } from './states/app.state';
import { ConfigurationEffects } from './configuration/state/effects.configuration';
import { PluginEffects } from './plugin/state/effects.plugin';
import { ServerEffects } from './server/state/effects.server';
import { MovieEffects } from './movie/state/effects.movie';
import { ShowEffects } from './show/state/effects.show';
import { LoaderEffects } from './shared/components/loader/state/effects.loader';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './shared/error.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    ConfigurationModule,
    DashboardModule,
    WizardModule,
    ServerModule,
    PluginModule,
    TaskModule,
    ShowModule,
    MovieModule,
    LogsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    StoreModule.forRoot(ROOT_REDUCER, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot([ConfigurationEffects, PluginEffects, ServerEffects, MovieEffects, ShowEffects, LoaderEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 15 }) : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
