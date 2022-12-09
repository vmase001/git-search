import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ResponseItem, SearchResponse } from '../interfaces/service.interface';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  result: Subject<SearchResponse> = new Subject();
  item!: ResponseItem | undefined;
  //The git REST Url has CORS disabled so we can call this from our servers
  //API: https://developer.github.com/v3/search/
  githubSearchBaseUrl: string = 'https://api.github.com/search/repositories';

  doGitSearch(query: string | null): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      this.githubSearchBaseUrl + '?q=' + query
    );
  }
}
