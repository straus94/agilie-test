import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICardData, IReponseDataItem} from '../shared/app.interfaces';
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

    public trends(): void {
        this.apiService.getPictures().pipe(
        ).subscribe(resp => {
            this.setNewCards(resp.data);
        });
    }

    public search(str: string): void {
        this.apiService.getSearchablePictures(str).subscribe(resp => {
            this.setNewCards(resp.data);
        });
    }

    private setNewCards(data: IReponseDataItem[]): void {
        this.cards.next(data.map(item => ({
            id: item.id,
            title: item.title,
            date: item.import_datetime,
            img: item.images.original.url
        })));
    }
}
