import { log } from "./logger.js"

const buttons = []

const container = document.getElementsByClassName("container").item(0)
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

const btn1Click = () => {
  buttons.push(btn1)
  btn1.remove()
  log(buttons)
}

const btn2Click = () => {
  if (buttons.length > 0) {
    container.appendChild(buttons[buttons.length - 1])
    buttons.pop()
    log(buttons)
  }
}

btn1.addEventListener("click", btn1Click)

btn2.addEventListener("click", btn2Click)