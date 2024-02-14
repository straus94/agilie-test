import {ApplicationConfig} from '@angular/core';

import {routes} from './app.routes';
import {provideHttpClient, withJsonpSupport} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withJsonpSupport()),
    ]
};
