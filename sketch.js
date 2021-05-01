let veils = [];
let numVeils = 16;
let veilsMin2 = numVeils - 2;
let colours = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]


function setup() {
    createCanvas(700, 700);
    // let colVal = 255;
    inc = 2 * height / veilsMin2;
    flux = 80;

    let colIndex = 1;
    let prevColIndex = colIndex;
    for (let j = -inc; j < height + inc; j += inc / 2) {
        colIndex = generateRandomIndex(prevColIndex, colours.length);
        prevColIndex = colIndex;
        let v = new Veil(j, flux, colours[colIndex], colIndex);
        veils.push(v)
        v.calcTopRow();
    }

}

function draw() {
    background(0);

    for (let v of veils) {
        v.draw();
        v.move();
        if (v.heightAvg > height + inc) {
            v.heightAvg = veils[0].heightAvg - inc / 2;
            veils.unshift(veils.pop())

        }
    }

}



function generateRandomIndex(prevVal, max) {
    let val = prevVal;
    while (val === prevVal) {
        val = Math.floor(Math.random() * (max)); 
    }
    return val;
}