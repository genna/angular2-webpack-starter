import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { normalize } from 'normalizr';
import { postSchema } from './blog.schema';

@Injectable()
export class BlogProvider {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	loadPost(): Promise<any> {
		return this.http
			.get('assets/data.json')
			.map(response => response.json())
			.map(response => {
				let normalizedResponse = normalize(response, postSchema);

				// console.log('Raw response', response);
				// console.log('Normalized response', normalizedResponse);

				return normalizedResponse;
			})
			.toPromise();
	}
}