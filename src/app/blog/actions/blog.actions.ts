import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { BlogProvider } from '../providers/blog.provider';
import { IAppState } from '../../app.reducer';
import { ActionTypes } from '../action-types';

@Injectable()
export class BlogActions {
	private provider: BlogProvider;
	private ngRedux: NgRedux<IAppState>;

	constructor(ngRedux: NgRedux<IAppState>, provider: BlogProvider) {
		this.ngRedux = ngRedux;
		this.provider = provider;
	}

	async loadPost(): Promise<void> {
		let post = await this.provider.loadNormalizedPost();
		this.ngRedux.dispatch({ type: ActionTypes.SET_POST_DATA, payload: post });
	}

	changeTitle(title: string) {
		this.ngRedux.dispatch({ type: ActionTypes.CHANGE_TITLE, payload: title });
	}

	voteForAuthor(authorId: string) {
		this.ngRedux.dispatch({ type: ActionTypes.VOTE_FOR_AUTHOR, payload: authorId });
	}
}