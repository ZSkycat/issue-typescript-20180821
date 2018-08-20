import { LibObject, Point } from './base';
export default function (): void;
export declare class LibCircle implements LibObject {
    readonly type: string;
    readonly id: number;
    point(): Point;
}
export declare class LibSquare implements LibObject {
    readonly type: string;
    readonly id: number;
}
