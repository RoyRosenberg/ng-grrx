import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Post } from '../models/post';
import { PostActionTypes, PostsActions } from '../state/post.actions';

export interface PostState {
    fetching: boolean;
    posts: Post[];
}

const initState: PostState = {
    fetching: false,
    posts: [],
};

const getPostsFeatureState = createFeatureSelector<PostState>('posts');
export const getPosts = createSelector(
    getPostsFeatureState,
    state => state.posts
);
export const getFetchingInProgress = createSelector(
    getPostsFeatureState,
    state => state.fetching
);

export function postsReducer(state: PostState = initState, action: PostsActions): PostState {
    console.log('in reducer:', action);
    switch (action.type) {
        case PostActionTypes.GetPosts:
            return {
                ...state,
                fetching: true
            };
        case PostActionTypes.GetPostsSuccess:
            return {
                ...state,
                posts: action.payload,
                fetching: false
            };
        case PostActionTypes.GetPostsFailed:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}
