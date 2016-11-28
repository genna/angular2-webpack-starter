import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'comments',
	templateUrl: 'comments.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
	@Input() items: any[];
	@Output() vote = new EventEmitter<string>();

	onVote(authorId) {
		this.vote.emit(authorId);
	}
}