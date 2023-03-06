import Controls  from './controls.js'
import { elements } from './elements.js'
import Timer from './timer.js'
import Sounds from './sounds.js'

const {
  displayMinutes,
  displaySeconds,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFire,} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFire,
})

const timer = Timer({
  displayMinutes,
  displaySeconds,
  StopControls: controls.Stop,
})

const sound = Sounds()

export default function Events() {

}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause)
buttonStop.addEventListener('click', stop);
buttonPlus.addEventListener('click', plus);
buttonMinus.addEventListener('click', minus);

buttonFlorest.addEventListener('click', florest);
buttonRain.addEventListener('click', rain);
buttonCoffe.addEventListener('click', coffe);
buttonFire.addEventListener('click', fire)

function play() {
  controls.Play()
  timer.countdown()
  sound.pressButton()
}

function pause() {
  controls.Pause()
  timer.hold()
  sound.pressButton()
}

function stop() {
  controls.Stop()
  timer.reset()
  sound.pressButton()
}

function florest() {
  controls.Florest()
  sound.pressButton()
  sound.FlorestSound()
}

function rain() {
  controls.Rain()
  sound.pressButton()
  sound.RainSound()
}

function coffe() {
  controls.Coffe()
  sound.pressButton()
  sound.CoffeSound()
}

function fire() {
  controls.Fire()
  sound.pressButton()
  sound.FireAudio()
}

function plus() {
  timer.Plus()
  sound.pressButton()
}

function minus() {
  timer.Minus()
  sound.pressButton()
}
