import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'comment',
	templateUrl: 'comment.component.html',
	styleUrls: ['comment.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
	@Input() item: any;

	@Output() vote = new EventEmitter<string>();

	onVote() {
		this.vote.emit(this.item.author.id);
	}
}