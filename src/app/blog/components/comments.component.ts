import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'comments',
	templateUrl: 'comments.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
	@Input() items: any[];
}