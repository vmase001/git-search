import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseItem } from 'src/app/interfaces/service.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  @Input()
  item!: ResponseItem;

  panelOpenState: boolean = false;
  constructor(private router: Router, private searchService: SearchService) {}

  viewMore(item: ResponseItem): void {
    // load item to service before navigating to component
    this.searchService.item = item;
    this.router.navigate([`result`, this.item.url]);
  }
}
