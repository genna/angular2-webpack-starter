import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
	selector: 'post-header',
	templateUrl: 'post-header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostHeaderComponent {
	@Input() post: Post;
}