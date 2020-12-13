import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Follower } from '../_models/follower';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: Partial<Follower[]>;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getFollowers();
    }))
    .subscribe(followers => this.followers = followers);
  }
}
