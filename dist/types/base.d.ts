export declare type LibObjectType = 'Circle' | 'Square';
export interface LibObject {
    readonly type: LibObjectType;
    readonly id: number;
}
export interface Point {
    x: number;
    y: number;
}
