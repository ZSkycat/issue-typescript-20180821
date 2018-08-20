import { LibCircle, LibSquare } from 'src/index';

export function createLibCircle() {
    return new LibCircle();
}

export function createPoint() {
    let lib = new LibCircle();
    return lib.point();
}
