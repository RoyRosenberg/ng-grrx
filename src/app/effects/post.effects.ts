import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PostService } from 'src/services/post.service';

import { LoadPostsFailed, LoadPostsSuccess, PostActionTypes } from '../state/post.actions';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    @Effect()
    loadPosts$ = this.actions$.pipe(
        tap(() => console.log('In Effect')),
        ofType(PostActionTypes.GetPosts),
        mergeMap(action =>
            this.postService.getPosts()
                .pipe(
                    map(posts => new LoadPostsSuccess(posts)),
                    catchError((err) => {
                        console.log(err);
                        return of(new LoadPostsFailed());
                    })
                )
        )
    );
}
