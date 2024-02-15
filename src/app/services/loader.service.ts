import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private isLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoader$: Observable<boolean> = this.isLoader.asObservable();

    constructor() { }

    public initLoader(): void {
        this.isLoader.next(true);
    }

    public clearLoader(): void {
        this.isLoader.next(false);
    }
}
