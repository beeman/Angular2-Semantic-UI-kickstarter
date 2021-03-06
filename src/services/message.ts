import {EventEmitter} from "angular2/angular2";

export class MessageService {
	_emitter: EventEmitter<any> = new EventEmitter<any>();
	_rx: any;
	constructor() {
		this._rx = this._emitter;
	}
	emitMessage(data: any) {
		this._rx.next(data);
	}
}

