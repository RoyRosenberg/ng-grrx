import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../models/user';
import { UserActionTypes, UsersActions } from '../state/user.actions';

export interface UserState {
    fetching: boolean;
    users: User[];
}

const initState: UserState = {
    fetching: false,
    users: [],
};

const getUsersFeatureState = createFeatureSelector<UserState>('users');
export const getUsers = createSelector(
    getUsersFeatureState,
    state => state.users
);
export const getFetchingUserInProgress = createSelector(
    getUsersFeatureState,
    state => state.fetching
);


export function userReducer(state: UserState = initState, action: UsersActions): UserState {
    console.log('in user reducer:', action);
    switch (action.type) {
        case UserActionTypes.GetUsers:
            return {
                ...state,
                fetching: true
            };
        case UserActionTypes.GetUsersSuccess:
            return {
                ...state,
                users: action.payload,
                fetching: false
            };
        case UserActionTypes.GetUsersFailed:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}

