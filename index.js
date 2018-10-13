function Circle(radius) {
    this.radius = radius;

    let location = {
        x: 0,
        y: 0
    }
    console.log('inside inner2',this)


    let computeOptimalSolution = function (factor) {
        console.log(factor)
    }

    this.draw = function() {
        computeOptimalSolution(0.1)
        location
        console.log('inside inner',this)
        console.log('r',this.radius)
        console.log('r333',radius)

        computeOptimalSolution(0.3)
        console.log('draw')

    }
}

const circle = new Circle(8)
circle.draw()