import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, catchError, finalize, of} from "rxjs";
import {ErrorService} from "../services/error.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        public errorService: ErrorService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.errorService.clearError();

        return next.handle(req).pipe(
            catchError(e => {
                this.errorService.setError();
                return of(e)
            })
        );
    }
}

