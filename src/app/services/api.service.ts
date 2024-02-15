import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IResponseTrending} from '../shared/app.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private API_KEY = 'fgHrnRXXsDLzXoUooPeTZe3tNc9uz91P';
    private readonly LIMIT = 12;
    private readonly DOMAIN = 'https://api.giphy.com/v1/gifs/';

    constructor(
        private http: HttpClient
    ) { }

    public getPictures(): Observable<IResponseTrending> {
        return this.http.get<IResponseTrending>(`${this.DOMAIN}trending?api_key=${this.API_KEY}&limit=${this.LIMIT}`);
    }

    public getSearchablePictures(str: string): Observable<IResponseTrending> {
        return this.http.get<any>(`${this.DOMAIN}search?api_key=${this.API_KEY}&limit=${this.LIMIT}&q=${str}`);
    }
}
