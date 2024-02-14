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

    constructor(
        private http: HttpClient
    ) { }

    public getPictures(): Observable<IResponseTrending> {
        return this.http.get<IResponseTrending>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.API_KEY}&limit=${this.LIMIT}`);
    }
}
