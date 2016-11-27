import { Schema, arrayOf } from 'normalizr';

export const postSchema = new Schema('posts', { idAttribute: 'id' });
const postAuthorSchema = new Schema('postAuthors', { idAttribute: 'id' });
const commentSchema = new Schema('comments', { idAttribute: 'id' });
const commentAuthorSchema = new Schema('commentAuthors', { idAttribute: 'id' });

postSchema.define({
	author: postAuthorSchema,
	comments: arrayOf(commentSchema)
});

commentSchema.define({
	author: commentAuthorSchema
});