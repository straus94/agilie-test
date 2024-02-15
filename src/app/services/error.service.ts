import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    private isError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isError$: Observable<boolean> = this.isError.asObservable();

    constructor() { }

    public setError(): void {
        this.isError.next(true);
    }

    public clearError(): void {
        this.isError.next(false);
    }
}
