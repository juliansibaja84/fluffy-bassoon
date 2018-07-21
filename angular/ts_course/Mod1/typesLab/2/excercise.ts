class ColorChange{
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }

    changeColor(color: string):boolean{
        (this.div as HTMLElement).style.background = color;
        return true
    }
}

interface ElementSet {
    'div': Element,
    'button': Element
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

let elementSets: Array<ElementSet> = [];
let squareSizeN: number = 100;
let squareDimention: string = `${squareSizeN}px`;

for (let index: number = 0; index < 7; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    })
}

elementSets.map((elem, index) => {
    let colorChangeClass = new ColorChange(elem.div);
    (elem.div as HTMLElement).style.width = squareDimention;
    (elem.div as HTMLElement).style.height = squareDimention;
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})





