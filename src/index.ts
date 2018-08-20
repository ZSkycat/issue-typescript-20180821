import { LibObject, Point } from './base';

export default function() {
    console.log('hello world');
}

export class LibCircle implements LibObject {
    readonly type = 'Circle';
    readonly id: number = Date.now();

    point(): Point {
        return {
            x: 0,
            y: 0,
        };
    }
}

export class LibSquare implements LibObject {
    readonly type = 'Square';
    readonly id: number = Date.now();
}
