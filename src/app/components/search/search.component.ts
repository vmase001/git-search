import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../../services/search.service';
import { SearchResponse } from 'src/app/interfaces/service.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  loading: boolean = true;
  private resultsSubject: Subject<SearchResponse> =
    new Subject<SearchResponse>();
  results$ = this.resultsSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    public searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.getSearchResult(params.get('query'));
    });
  }

  // here we get the results based on the url query param
  private getSearchResult(param: string | null): void {
    this.results$ = this.searchService.doGitSearch(param).pipe(
      tap(() => (this.loading = false)),
      tap((x) => console.log('results = ', x))
    );
  }
}
