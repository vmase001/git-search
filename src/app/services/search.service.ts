import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  githubSearchBaseUrl,
  ResponseItem,
  SearchResponse,
} from '../interfaces/service.interface';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  result: Subject<SearchResponse> = new Subject();
  item!: ResponseItem | undefined;

  doGitSearch(query: string | null): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(githubSearchBaseUrl + '?q=' + query);
  }
}
