/* Sample reusable object */
/* Create object in differnt ways */

// factory function to create object
function createRectangle(length, breadth) {

    return {
        // old javascript
        lenght: length,
        //ES 6 of the if key and value are some we can write only one word
        breadth,
        area() {
            console.log(length * breadth)
        }
    }
}

let rectangle = createRectangle(2, 3);
rectangle.area();

// Constructor function to create object
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log("draw circle");
        }
}

let circle = new Circle(2);
console.log(circle.radius);
circle.draw();
