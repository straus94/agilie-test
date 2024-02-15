import {HttpClient, HttpParams} from '@angular/common/http';
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
        const params = new HttpParams()
            .set('api_key', this.API_KEY)
            .set('limit', this.LIMIT.toString());

        return this.http.get<IResponseTrending>(`${this.DOMAIN}trending`, {params});
    }

    public getSearchablePictures(str: string): Observable<IResponseTrending> {
        const params = new HttpParams()
            .set('api_key', this.API_KEY)
            .set('limit', this.LIMIT.toString())
            .set('q', str);

        return this.http.get<any>(`${this.DOMAIN}search`, {params});
    }
}
