class ColorChange{
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }

    changeColor(color: number | string):boolean{
        if (typeof (color) === "number") {
            return true;
        }
        (this.div as HTMLElement).style.background = color;
        return true
    }
}

enum Colors {
    green,
    blue,
    white,
    black,
    orange,
    red,
    yellow
}

interface ElementSet {
    'div': Element,
    'button': Element
}

class NumericColor extends ColorChange{
    static Colors = Colors;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareDimention;
        (this.div as HTMLElement).style.height = squareDimention;
    }
    changeColor(color : number){
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

let elementSets: Array<ElementSet> = [];
let squareSizeN: number = 100;
let squareDimention: string = `${squareSizeN}px`;

for (let index: number = 0; index < 7; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

let getRandomIntInclusive: Function = (min : number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

elementSets.map((elem, index) => {
    let colorChangeClass = new NumericColor(elem.div);
    (elem.div as HTMLElement).style.width = squareDimention;
    (elem.div as HTMLElement).style.height = squareDimention;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 6));
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})





