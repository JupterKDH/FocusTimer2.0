import Sounds from "./sounds.js"

const sounds = Sounds()

export default function Timer({
  displayMinutes,
  displaySeconds,
  StopControls,

}) {
  let timerTimeOut
let minutes = Number(displayMinutes.textContent)

//timer
function Plus() {
  minutes += 1
  displayMinutes.textContent = String(minutes).padStart(2, "0")
}
function Minus() {
  if(minutes <= 5) {
    alert('não há como diminuir mais minutos')
  } else {
  minutes -= 5
  displayMinutes.textContent = String(minutes).padStart(2, "0")
  }
}

function updateDisplay(minutes, seconds) {
  displayMinutes.textContent = String(minutes).padStart(2, "0")
  displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function updateTimerSet(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  displayMinutes.textContent = String(newMinutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
  
}

function reset() {
  updateTimerSet(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)
      
      if (isFinished) {
          StopControls()
          updateDisplay(minutes, 0)
          sounds.timeEnd()
          return
      }

      if (seconds <= 0) { 
          seconds = 60
          --minutes
      }

      updateDisplay(minutes, String(seconds -1))

      countdown()
  }, 1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}
return {
  Plus,
  Minus,
  updateTimerSet,
  reset,
  countdown,
  hold
}

}

