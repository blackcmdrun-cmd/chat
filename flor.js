import { shake } from './flor.js' // егер shake бөлек болса

// 🔊 sound helper
function playSound(src) {
  const audio = new Audio(src)
  audio.volume = 0.6
  audio.play()
}

// ❌ ERROR (қызыл + shake + sound)
export function errorEffect(input) {
  input.style.border = "2px solid red"
  input.style.boxShadow = "0 0 10px red"
  input.style.transition = "0.3s"

  shake(input)

  playSound("./sounds/error.mp3")

  setTimeout(() => {
    input.style.boxShadow = ""
  }, 1000)
}

// ✅ SUCCESS (көк + sound)
export function successEffect(input) {
  input.style.border = "2px solid dodgerblue"
  input.style.boxShadow = "0 0 10px dodgerblue"
  input.style.transition = "0.3s"

  playSound("./sounds/success.mp3")

  setTimeout(() => {
    input.style.boxShadow = ""
  }, 1000)
}import { shake } from './flor.js' // егер shake бөлек болса

// 🔊 sound helper
function playSound(src) {
  const audio = new Audio(src)
  audio.volume = 0.6
  audio.play()
}

// ❌ ERROR (қызыл + shake + sound)
export function errorEffect(input) {
  input.style.border = "2px solid red"
  input.style.boxShadow = "0 0 10px red"
  input.style.transition = "0.3s"

  shake(input)

  playSound("./sounds/error.mp3")

  setTimeout(() => {
    input.style.boxShadow = ""
  }, 1000)
}

// ✅ SUCCESS (көк + sound)
export function successEffect(input) {
  input.style.border = "2px solid dodgerblue"
  input.style.boxShadow = "0 0 10px dodgerblue"
  input.style.transition = "0.3s"

  playSound("./sounds/success.mp3")

  setTimeout(() => {
    input.style.boxShadow = ""
  }, 1000)
}