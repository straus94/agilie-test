import {Component} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {ApiService} from './services/api.service';
import {StoreService} from './services/store.service';
import {Observable} from 'rxjs';
import {ICardData} from './shared/app.interfaces';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CardComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {

    public cards$: Observable<ICardData[]> = this.storeService.cards$;

    constructor(
        private storeService: StoreService
    ) {

        this.storeService.init();
    }
}
