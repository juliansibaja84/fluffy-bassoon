import * as _ from "./dice.js"

interface DiceType {
    div: Element,
}

let diceSet : Array<DiceType> = [];
let diceInstances : Array<_.dieRoller> = [];

for(let i = 0; i < 4; i++){
    diceSet.push({
        'div': document.createElement('div')
    })
}

diceSet.map((elem,index) => {
    let dice = new _.dieRoller(elem.div,200,200,"yellow",5);
    diceInstances.push(dice);
    document.body.appendChild(elem.div);
})

let buttonx = document.createElement('button');
document.body.appendChild(buttonx);

(buttonx as HTMLElement).onclick = (event) => {
    diceInstances.map((elem, index) => {
        elem.roll();
    })
}

