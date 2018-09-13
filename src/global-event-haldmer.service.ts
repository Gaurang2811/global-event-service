import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable
({
  providedIn: 'root',
})
export class GlobalEvent {

	public _subject$: Subject<any> = new Subject<any>();
	public _data$ = this._subject$.asObservable();

	public _subscribedData: Map<string, Array<Function>> = new Map<string, Array<Function>>();

	constructor(
	) {
		this._data$.subscribe((data) => this._onEvent(data));
	}

	notifyDataChanged(event, value) {
		const current = this._subject$[event];
		if(current !== value) {
			this._subject$[event] = value;

			this._subject$.next({
				event: event,
				data: this._subject$[event],
			})
		}
		console.log(current, value)
	}

	subscribe(event: string, callback: Function) {
		const subscribed = this._subscribedData.get(event) || [];
		subscribed.push(callback);
		this._subscribedData.set(event, subscribed);
	}

	_onEvent(data: any) {
		const subscribed = this._subscribedData.get(data['event']) || [];
		subscribed.forEach((callback) => {
			callback.call(null, data['data']);
		})
	}

}
