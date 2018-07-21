import * as Ch from "chance";

enum diceFaces {
    uno = 1,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
}

var newchance = new Ch();

export class Dice {
    protected height: string;
    protected width: string;
    protected color: string;
    protected border: string;
    protected div: Element;
    constructor(div: Element, height: number, width: number, color: string, border: number = 1) {
        this.div = div;
        this.height = `${height}px`;
        this.width = `${width}px`;
        this.border = `${border}px Solid Black`
        this.color = color;

    }
}

export class dieRoller extends Dice {
    constructor(div: Element, height: number = 100, width: number = 100, color: string = "white", border: number = 5) {
        super(div, height, width, color);
        (this.div as HTMLElement).style.width = this.width;
        (this.div as HTMLElement).style.height = this.height;
        (this.div as HTMLElement).style.border = this.border;
        (this.div as HTMLElement).style.backgroundColor = this.color;
        (this.div as HTMLElement).style.cssFloat = "left";
        (this.div as HTMLElement).style.textAlign = "center";
        (this.div as HTMLElement).style.verticalAlign = "middle";
        (this.div as HTMLElement).style.lineHeight = `${(height * 0.8)}px`;
        (this.div as HTMLElement).textContent = "?"
    }

    roll(): boolean {
        let luckyNumber: number = ((newchance.d6 as Function)() as number);
        (this.div as HTMLElement).textContent = diceFaces[luckyNumber];
        return true;
    }
}

let getRandomInt: Function = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Dice;