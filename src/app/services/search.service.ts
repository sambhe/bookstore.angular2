import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Book } from '../types/book';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}
  
  search(term: string): Observable<Book[]> {
    const url = `app/books/?title=${term}`;
    return this.http
               .get(url)
               .map((r: Response) => r.json().data as Book[]);
  }
}
