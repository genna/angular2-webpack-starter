import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainer } from './containers/post.container';
import { PostHeaderComponent } from './components/post-header.component';
import { CommentsComponent } from './components/comments.component';
import { CommentsSummaryComponent } from './components/comments-summary.component';
import { CommentComponent } from './components/comment.component';
import { BlogProvider } from './providers/blog.provider';
import { BlogActions } from './actions/blog.actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	declarations: [
		PostContainer,
		PostHeaderComponent,
		CommentsComponent,
		CommentComponent,
		CommentsSummaryComponent
	],
	exports: [PostContainer],
	providers: [BlogProvider, BlogActions]
})
export class BlogModule {

}