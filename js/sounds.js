export default function() {
  const buttonPressAudio = new Audio('sounds/button.wav')
  const kitchenTimer = new Audio('sounds/timer.mp3')
  const florestAudio = new Audio('sounds/Floresta.wav')
  const rainAudio = new Audio('sounds/Chuva.wav')
  const coffeAudio = new Audio('sounds/Cafeteria.wav')
  const fireAudio = new Audio('sounds/Lareira.wav')

  florestAudio.loop = true
  rainAudio.loop = true
  coffeAudio.loop = true
  fireAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function FlorestSound() {
    florestAudio.play()
    rainAudio.pause()
    coffeAudio.pause()
    fireAudio.pause()
  }

  function RainSound() {
    florestAudio.pause()
    rainAudio.play()
    coffeAudio.pause()
    fireAudio.pause()
  }

  function CoffeSound() {
    florestAudio.pause()
    rainAudio.pause()
    coffeAudio.play()
    fireAudio.pause()
  }

  function FireAudio() {
    florestAudio.pause()
    rainAudio.pause()
    coffeAudio.pause()
    fireAudio.play()
  }


  return {
    pressButton,
    timeEnd,
    FlorestSound,
    RainSound,
    CoffeSound,
    FireAudio
  }
}