const hourInp = document.querySelector(".hour")
const minInp = document.querySelector(".min")
const hourShow = document.querySelector(".show-hour")
const secShow = document.querySelector(".show-sec")
const minShow = document.querySelector(".show-min")
const btn = document.querySelector(".btn")

btn.innerHTML = "Set Timer"

let audio = new Audio("ringtone.mp3")
hourShow.innerHTML = "00"
minShow.innerHTML = "00"
secShow.innerHTML = "00"

btn.addEventListener("click", (e) => {
  {
    startTime()
  }
})

function startTime() {
  audio.pause()
  if (btn.innerText == "Reset Timer") {
    resetTime()
    return
  }
  let sec = 60
  let min = 0
  let hour = 0

  btn.innerHTML = "Reset Timer"
  hourShow.innerHTML = hourInp.value < 10 ? `0${hourInp.value}` : hourInp.value
  secShow.innerHTML = sec < 10 ? `0${sec}` : sec
  minShow.innerHTML = minInp.value < 10 ? `0${minInp.value}` : minInp.value
  min = parseInt(minShow.innerHTML)
  hour = parseInt(hourShow.innerHTML)
  let timer = setInterval(() => {
    if (hourShow.innerHTML == 00 && minShow.innerHTML == 00) {
      console.log("alarm")
      audio.play()
      setTimeout(() => audio.pause(), 7000)
      secShow.innerHTML = "00"
      btn.innerText = "Set Timer"
      clearInterval(timer)
    } else {
      sec--
      secShow.innerHTML = sec < 10 ? `0${sec}` : sec
      if (secShow.innerHTML == "00") {
        sec = 60
        min--
        minShow.innerHTML = min < 10 ? `0${min}` : min
      }
      if (minShow.innerHTML == "00" && hour > 0) {
        hour--
        hourShow.innerHTML = hour < 10 ? `0${hour}` : hour
      }
    }
  }, 1000)
}

function resetTime() {
  audio.pause()
  btn.innerText = "Set Timer"
  hourShow.innerHTML = "00"
  minShow.innerHTML = "00"
  secShow.innerHTML = "00"
}
