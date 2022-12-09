import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { TakeUntilComponent } from 'src/app/shared/takeuntil-component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends TakeUntilComponent {
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    public searchService: SearchService,
    private location: Location
  ) {
    super();
  }

  ngOnInit() {
    this.route.url.pipe(this.takeUntilDestroyed()).subscribe(() => {
      this.getSearchResult();
    });
  }

  goBack(): void {
    this.location.back();
  }

  private getSearchResult(): void {
    const query = this.route.snapshot.paramMap.get('query');
    this.searchService
      .doGitSearch(query)
      .pipe(this.takeUntilDestroyed())
      .subscribe(
        (response: any) => {
          // here we load the data to our subject
          this.searchService.result.next(response);
          this.loading = false;
        },
        (e) => {
          console.error(e);
          window.alert(e);
          this.loading = false;
        }
      );
  }
}
