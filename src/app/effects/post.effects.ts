import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';

import { State } from '../state/app.state';
import { LoadPostsFailed, LoadPostsSuccess, PostActionTypes } from '../state/post.actions';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService,
        private userService: UserService,
        private store: Store<State>
    ) { }

    @Effect()
    loadPosts$ = this.actions$.pipe(
        tap(() => console.log('In posts Effect')),
        ofType(PostActionTypes.GetPosts),
        mergeMap(action =>
            forkJoin(
                this.postService.getPosts(),
                this.userService.getUsers())
                .pipe(
                    map(res => {
                        const [posts, users] = res;
                        posts.forEach(p => {
                            const userList = users.filter(u => u.id === p.userId);
                            if (userList.length > 0) {
                                p.user = userList[0];
                            }
                        });
                        return new LoadPostsSuccess(posts);
                    }),
                    // map(res => new LoadPostsSuccess(res)),
                    catchError((err) => {
                        console.log(err);
                        return of(new LoadPostsFailed());
                    })
                )
        )
    );
}
