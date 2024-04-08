let xcount = 0
let ycount = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            led.unplot(xcount, ycount)
            xcount += 1
        }
        ycount += 1
        xcount = 0
    }
})
