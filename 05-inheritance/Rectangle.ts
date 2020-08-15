import { Shape } from './Shape';

export class Rectangle extends Shape {

    constructor(theX: number, theY:number,
        private _width: number,
        private _lenght: number) {

            super(theX, theY);
    }

    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, lenght=${this._lenght}`;
    }
}