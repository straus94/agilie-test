import {ApplicationConfig} from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, withJsonpSupport} from '@angular/common/http';
import {LoaderInterceptor} from './core/loader.interceptor';
import {ErrorInterceptor} from './core/error.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withJsonpSupport(),
            withInterceptorsFromDi(),
        ),
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ]
};
