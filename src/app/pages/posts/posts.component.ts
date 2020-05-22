import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/reducers/post.reducer';
import { State } from 'src/app/state/app.state';
import { LoadPosts } from 'src/app/state/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post$: Observable<Post[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.post$ = this.store.select(getPosts);
    this.store.dispatch(new LoadPosts());
  }

}
