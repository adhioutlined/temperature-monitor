function Happy_blink () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(75)
        basic.clearScreen()
        basic.pause(75)
    }
}
function meh_blink () {
    for (let index = 0; index < 4; index++) {
        music.setVolume(80)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . # #
            `)
        basic.pause(75)
        basic.clearScreen()
        basic.pause(75)
    }
}
loops.everyInterval(30000, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 30) {
        Happy_blink()
    } else {
        if (input.temperature() > 30) {
            meh_blink()
        }
    }
})
