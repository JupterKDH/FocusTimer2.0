import { elements } from './elements.js'
import Controls  from './controls.js'
import Timer from './timer.js'
import Events from './event.js'

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

const event = Events()

