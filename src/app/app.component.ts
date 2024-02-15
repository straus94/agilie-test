import {LoaderService} from './services/loader.service';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {StoreService} from './services/store.service';
import {Observable, Subject, debounceTime, distinctUntilChanged, takeUntil} from 'rxjs';
import {ICardData} from './shared/app.interfaces';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {LoaderComponent} from './components/loader/loader.component';
import {ErrorComponent} from './components/error/error.component';
import {ErrorService} from './services/error.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CardComponent, CommonModule, ReactiveFormsModule, LoaderComponent, ErrorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

    public cards$: Observable<ICardData[]> = this.storeService.cards$;
    public searchControl: FormControl<string> = new FormControl<string>('');
    public isLoader$: Observable<boolean> = this.loaderService.isLoader$;
    public isError$: Observable<boolean> = this.errorService.isError$;

    private destroy: Subject<boolean> = new Subject<boolean>();

    constructor(
        private storeService: StoreService,
        private loaderService: LoaderService,
        private errorService: ErrorService
    ) {

        this.storeService.trends();
    }

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            takeUntil(this.destroy)
        ).subscribe(value => {
            value.length ? this.storeService.search(value) : this.storeService.trends();
        });
    }

    ngOnDestroy(): void {
        this.destroy.next(true);
        this.destroy.complete();
    }
}
