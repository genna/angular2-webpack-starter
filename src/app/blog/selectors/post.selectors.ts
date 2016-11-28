import { createSelector } from 'reselect';
import { IBlogState } from '../reducers/blog.reducer';

const commentsEntitiesSelector = (state: IBlogState) => state.data.entities.comments;
const commentAuthorsSelector = (state: IBlogState) => state.data.entities.commentAuthors;
const postsSelector = (state: IBlogState) => state.data.entities.posts;
const currentPostIdSelector = (state: IBlogState) => state.data.result;


export const currentPostSelector = createSelector(
	postsSelector,
	currentPostIdSelector,
	(posts, id) => posts[id]
);

export const commentsSummarySelector = createSelector(
	commentsEntitiesSelector,
	commentAuthorsSelector,
	(comments, authors) => ({
		numOfComments: Object.keys(comments).length,
		numOfAuthors: Object.keys(authors).length
	})
);

export const commentsSelector = createSelector(
	commentsEntitiesSelector,
	commentAuthorsSelector,
	(comments, authors) => {
		return Object.values(comments).map(x => {
			return {
				content: x.content,
				author: authors[x.author]
			};
		});
	}
);