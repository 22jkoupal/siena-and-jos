input.onButtonPressed(Button.B, function () {
	
})
let reading = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    serial.writeValue("moisture", pins.analogReadPin(AnalogPin.P1))
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(2000)
})
