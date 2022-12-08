import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../search.service";
import { Location } from '@angular/common';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public result: any = null;
    constructor(
        private route:ActivatedRoute,
        private searchService:SearchService,
        private location:Location
    ) {}

    ngOnInit() {
        // this.getSearchResult();
        this.route.url.subscribe(url =>{
            this.getSearchResult();
        });
    }

    goBack(): void {
        this.location.back();
    }

    private getSearchResult() {
        const query = this.route.snapshot.paramMap.get('query');
        let response = this.searchService.doGitSearch(query);
        response.subscribe(data => {
            console.log(data);
            this.result = data;
        });
    }
}
