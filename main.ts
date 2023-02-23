input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0) * (3 / 1023))
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
