input.onButtonPressed(Button.A, function () {
    repcount += -1
})
input.onButtonPressed(Button.AB, function () {
    repset = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    repcount += 1
})
let repset = 0
let repcount = 0
repset = 0
let count = 3
let runonce = 0
let finished = 0
let xcount = 0
let ycount = 0
basic.forever(function () {
    while (repset != 1) {
        basic.showNumber(repcount)
    }
    runonce = 1
    while (count != 0) {
        basic.showNumber(count)
        basic.pause(1000)
        count += -1
    }
    basic.clearScreen()
    while (finished == 0) {
        for (let index = 0; index <= repcount; index++) {
            led.plot(xcount, ycount)
            xcount += 1
            if (xcount == 4) {
                ycount += -1
                xcount = 0
            }
        }
    }
})
