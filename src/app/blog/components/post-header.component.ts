import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
	selector: 'post-header',
	templateUrl: 'post-header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostHeaderComponent {
	@Input() post: Post;
	@Output() titleChange = new EventEmitter<string>();

	changeTitle(title) {
		this.titleChange.emit(title);
	}
 }