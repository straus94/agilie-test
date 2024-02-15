import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, finalize} from "rxjs";
import {LoaderService} from "../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(
        public loaderService: LoaderService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.initLoader();

        return next.handle(req).pipe(
            finalize(() => {
                this.loaderService.clearLoader();
            })
        );
    }
}

