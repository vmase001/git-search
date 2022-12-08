import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SearchService {
    constructor(private http:HttpClient) {
    }

    //The git REST Url has CORS disabled so we can call this from our servers
    //API: https://developer.github.com/v3/search/
    githubSearchBaseUrl:string = 'https://api.github.com/search/repositories';

    doGitSearch(query: any) {
        console.log("Starting search for " + query);
        return this.http.get(this.githubSearchBaseUrl + '?q=' + query);
    };

}
