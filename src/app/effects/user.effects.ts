import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/services/user.service';

import { LoadUsersFailed, LoadUsersSuccess, UserActionTypes } from '../state/user.actions';


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        tap(() => console.log('In User Effect')),
        ofType(UserActionTypes.GetUsers),
        mergeMap(action =>
            this.userService.getUsers()
                .pipe(
                    map(users => new LoadUsersSuccess(users)),
                    catchError((err) => {
                        console.log(err);
                        return of(new LoadUsersFailed());
                    })
                )
        )
    );
}
