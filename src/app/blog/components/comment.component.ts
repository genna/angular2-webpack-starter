import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'comment',
	templateUrl: 'comment.component.html',
	styleUrls: ['comment.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
	@Input() item: any;
}