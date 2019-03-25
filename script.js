let stop = {}

document.addEventListener('DOMContentLoaded', function(){
  createfigurs()
  stop.chanel = Math.floor(Math.random() * 3)
  stop.color = sumRandomParametrs(225)
  stop.butColor = generateColor()
  document.getElementById('start').setAttribute('style', 'border: 3px solid rgb(' + stop.butColor + '); background-color: rgb(' + stop.butColor + ');')
})

function createfigurs() {
  let number = readText('number')
  let speed1 = readText('speed1')
  let i = 0
  while (i < number) {
    let width = sumRandomParametrs(15)
    let left = cheackOffset(width)

    let height = sumRandomParametrs(5)
    let top = cheackOffset(height)

    speed1 = 0.5 + sumRandomParametrs(speed1) / 10

    let newDiv = document.createElement('div')
    document.getElementById('table').appendChild(newDiv).setAttribute('style', 'background-color:red; top: ' + top + 'vh; left: ' + left + 'vw; width: ' + width + 'vw; height: ' + height + 'vh; animation: spin '+ speed1 + 's linear infinite; background-color: rgb(' + generateColor() + ');')
    i += 1
  }
  let mess = document.getElementById('text').value
  let el = document.getElementById('h1')
  if (typeof el.textContent !== "undefined") {
    el.textContent = mess
  } else {
    el.innerText = mess
  }
  changeColorH1()
}

// function clean() {
//   let tablediv = document.getElementById('table').cloneNode(true)
//   // tablediv.removeChild('div')
//   let elem = document.body.getElementsByTagName('div')
//   elem = Array.from(elem)
//   console.log(elem)
//   tablediv.removeChild(document.getElementsByTagName('div'))
// }

function sumRandomParametrs(maxValue) {
  let a = Math.floor(Math.random() * 10)
  return Math.floor(Math.random() * maxValue) + a
}
function cheackOffset(a) {
  let b = Math.floor(Math.random() * 100) - 5
  if (a + b > 120) {
    cheackOffset(a, b)
  } else {
    return b
  }
}
function generateColor() {
  let color = []
  let chanel
  for (i = 0; i < 3; i++) {
    if (i === stop.chanel) {
      chanel = stop.color
    } else {
      chanel = sumRandomParametrs(225)
    }
    color[i] = chanel
  }
  return color.join()
}

function readText(a) {
  let text = document.getElementById(a).value
  text = Number.parseInt(text)
  return text
}

function changeColorH1() {
  let el = document.getElementById('color')
  if ( el.selectedIndex != -1) {
    if ( el.selectedIndex === 0 ) {
      document.getElementById('h1').setAttribute('style', 'color: black')
    } else {
      document.getElementById('h1').setAttribute('style', 'color: white')
    }
  }
}
