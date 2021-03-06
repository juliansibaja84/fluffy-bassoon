import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import {GitUsers} from './git-users';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GitSearchService {
  cachedValues: Array<{[query: string]: GitSearch}> = [];
  catchedUserValues: Array <{[query: string]: GitUsers}> = [];
  constructor(private http: HttpClient) {
   }
  gitSearch = (query: string, pageId: string = '1'): Promise<GitSearch> => {
    const promise = new Promise<GitSearch>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http.get('https://api.github.com/search/repositories?q=' + query + '&page=' + pageId)
        .toPromise()
        .then((response) => {
            resolve(response as GitSearch);
          }, (error) => {
            reject(error);
        });
        }
    });
    return promise;
  }
  gitUsersSearch = (query: string): Promise<GitUsers> => {
    const promise = new Promise<GitUsers>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http.get('https://api.github.com/search/users?q=' + query )
          .toPromise()
          .then((response) => {
            resolve(response as GitUsers);
          }, (error) => {
            reject(error);
          });
      }
    });
    return promise;
  }
}
