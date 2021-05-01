class Veil {
    constructor(heightAvg, flux, colVal, colIndex) {
        // this.yAvg = yAvg;
        this.heightAvg = heightAvg;
        this.colVal = colVal;
        this.flux = flux;
        this.colIndex = colIndex;
        this.topRowArray = [];
        this.xOff = random(0, 100);
    }


    draw() {
        fill(this.colVal);
        noStroke();
        // stroke(0)

        beginShape();
        curveVertex(0, height);
        curveVertex(0, height);
        curveVertex(-20, this.heightAvg);
        for (let i = 0; i < this.topRowArray.length; i++) {
            curveVertex(this.topRowArray[i].x, this.topRowArray[i].y);
        }
        curveVertex(width + 20, this.heightAvg);
        curveVertex(width, height);
        curveVertex(width, height);
        endShape();
    }

    calcTopRow() {
        this.topRowArray = [];
        for (let i = 0; i <= width; i += width / 5) {
            let yVal = this.heightAvg - noise(i + this.xOff) * this.flux;
            this.topRowArray.push(createVector(i, yVal))
        }
    }

    move() {
        this.heightAvg += 1;
        this.shimmer();

    }

    shimmer() {
        for (let i = 0; i < this.topRowArray.length; i++) {
            let newY = this.heightAvg - noise(i + this.xOff) * this.flux;
            this.topRowArray[i].y = newY;
        }
        this.xOff += 0.009;
    }

}