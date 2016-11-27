import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'comments-summary',
	templateUrl: 'comments-summary.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsSummaryComponent {
	@Input() summary: any;
}