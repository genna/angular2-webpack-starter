import { IAction } from '../../redux.helpers';
import { ActionTypes } from '../action-types';
import { NormalizeOutput } from 'normalizr';
import * as SI from 'seamless-immutable';

type ImmutableStateType = IBlogState & SeamlessImmutable.ImmutableObjectMethods<IBlogState>;

export interface IBlogState {
	data: NormalizeOutput;
}

const initialState: IBlogState = SI<IBlogState>({
	data: null
});

export const blog = (state: ImmutableStateType = initialState, action: IAction): IBlogState => {
	switch (action.type) {
		case ActionTypes.SET_POST_DATA:
			return state.set('data', action.payload);
		case ActionTypes.CHANGE_TITLE:
			let postId = state.data.result;
			return state.setIn(['data', 'entities', 'posts', postId, 'title'], action.payload);
		case ActionTypes.VOTE_FOR_AUTHOR:
			let author = state.data.entities.commentAuthors[action.payload];
			let votes = author.votes || 0;
			return state.setIn(['data', 'entities', 'commentAuthors', author.id, 'votes'], votes + 1);
		default:
			return state;
	}
};