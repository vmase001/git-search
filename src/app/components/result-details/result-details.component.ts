import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseItem } from 'src/app/interfaces/service.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss'],
})
export class ResultDetailsComponent {
  item!: ResponseItem;
  loading: boolean = true;
  constructor(public searchService: SearchService, private router: Router) {}

  ngOnInit() {
    // if the user navigates to this page without data force them to the home page
    if (!this.searchService.item) {
      this.router.navigate(['**']);
    }
  }
}
