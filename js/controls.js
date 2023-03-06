export default function Controls({
  buttonPlay,
  buttonPause,
  buttonFlorest,
  buttonRain,
  buttonCoffe,
  buttonFire,
}) {
  function Play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    
  }
  
  function Pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function Stop() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    
  }
  
  function Florest() {
    buttonFlorest.classList.toggle('active')
    buttonRain.classList.remove('active')
    buttonCoffe.classList.remove('active')
    buttonFire.classList.remove('active')
  }
  
  function Rain() {
    buttonFlorest.classList.remove('active')
    buttonRain.classList.toggle('active')
    buttonCoffe.classList.remove('active')
    buttonFire.classList.remove('active')
  }
  
  function Coffe() {
    buttonFlorest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCoffe.classList.toggle('active')
    buttonFire.classList.remove('active')
  }
  
  function Fire() {
    buttonFlorest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCoffe.classList.remove('active')
    buttonFire.classList.toggle('active')
  }

  return {
    Play,
    Pause,
    Stop,
    Florest,
    Rain,
    Coffe,
    Fire,
  }
}

