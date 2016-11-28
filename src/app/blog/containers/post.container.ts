import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Post } from '../models/post.model';
import { BlogActions } from '../actions/blog.actions';
import { IAppState } from '../../app.reducer';
import { commentsSummarySelector, currentPostSelector, commentsSelector } from '../selectors/post.selectors';

@Component({
	selector: 'post',
	templateUrl: 'post.container.html'
})
export class PostContainer implements OnInit {
	post: Post;
	commentsSummary: any;
	comments: any[];

	private actions: BlogActions;
	private ngRedux: NgRedux<IAppState>;

	constructor(ngRedux: NgRedux<IAppState>, actions: BlogActions) {
		this.ngRedux = ngRedux;
		this.actions = actions;
	}

	ngOnInit(): void {
		this.ngRedux
			.select(x => x.blog)
			.subscribe(state => {
				if (state.data) {
					this.post = currentPostSelector(state);
					this.commentsSummary = commentsSummarySelector(state)
					this.comments = commentsSelector(state);
				}
			});

		this.actions.loadPost();
	}

	onChangeTitle(title) {
		this.actions.changeTitle(title);
	}

	onVote(id: string) {
		this.actions.voteForAuthor(id);
	}
}