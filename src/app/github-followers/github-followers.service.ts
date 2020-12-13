import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Follower } from '../_models/follower';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() { 
    return this.http.get<Partial<Follower[]>>(this._url).pipe(
      map(response => response)
    );
  }
}
