import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICardData} from '../shared/app.interfaces';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    private cards: BehaviorSubject<ICardData[]> = new BehaviorSubject<ICardData[]>([]);
    public cards$: Observable<ICardData[]> = this.cards.asObservable();

    constructor(
        private apiService: ApiService
    ) { }

    public init(): void {
        this.apiService.getPictures().subscribe(resp => {
            console.log(resp);
            this.cards.next(resp.data.map(item => ({
                id: item.id,
                title: item.title,
                date: item.import_datetime,
                img: item.images.original.url
            })))
        })
    }
}
