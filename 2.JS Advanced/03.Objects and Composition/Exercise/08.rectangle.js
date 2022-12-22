function rectangle(width, height, color) {
    const rectangleObj = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
    return rectangleObj;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
