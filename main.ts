function Decompte () {
    basic.showNumber(Temps)
    basic.pause(1000)
    Temps += -1
    if (Temps == 5) {
        radio.sendString("F0")
    }
    if (Temps == 0) {
        Etat = 0
        FeuV()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Sy")
})
function FeuR () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
}
function Led () {
    strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    strip.setBrightness(32)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F0") {
        FeuO()
        basic.pause(2000)
        FeuR()
        Temps = 20
        Etat = 1
    }
    if (receivedString == "Sy") {
        Temps = 7
        Etat = 1
    }
})
function FeuV () {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
}
function FeuO () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
}
let strip: neopixel.Strip = null
let Temps = 0
let Etat = 0
radio.setGroup(10)
Led()
Etat = 0
FeuR()
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    if (Etat == 1) {
        Decompte()
    } else {
    	
    }
})
