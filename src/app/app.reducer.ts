import { combineReducers } from 'redux';
import { IBlogState, blog } from './blog/reducers/blog.reducer';

export interface IAppState {
	blog: IBlogState
}

export const rootReducer = combineReducers<IAppState>({
	blog
});