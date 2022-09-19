input.onButtonPressed(Button.A, function () {
    number = randint(0, 2)
    if (number == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 1) {
        basic.clearScreen()
        music.playTone(740, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.No)
    }
})
let number = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
