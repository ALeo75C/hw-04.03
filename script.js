function createfigurs() {
  let number = readText('number')
  let speed1 = readText('speed1')
  let speed2 = readText('speed2')
  let i = 0
  while (i < number) {
    let width = sumRandomParametrs(15)
    let left = cheackOffset(width)

    let height = sumRandomParametrs(5)
    let top = cheackOffset(height)

    speed1 = sumRandomParametrs(speed1) / 10

    let newDiv = document.createElement('div')
    document.getElementById('table').appendChild(newDiv).setAttribute('style', 'background-color:red; top: ' + top + 'vh; left: ' + left + 'vw; width: ' + width + 'vw; height: ' + height + 'vh; animation: spin '+ speed1 + 's linear infinite; background-color: rgb(' + generateColor() + '); transotion: all' + speed2 + 'ms ease')
    i += 1
  }
  document.onmousemove = function(event) {
    let element = document.getElementsByClassName('one')
    element.style = 'top: ' + event.pageY + 'px; left: ' + event.pageX + 'px;'
  }
}

function clean() {
  // tablediv = document.getElementById('table').cloneNode(true)
  // tablediv.removeChild('div')
  document.body.removeChild('div')
}

function sumRandomParametrs(maxValue) {
  let a = Math.floor(Math.random() * 10)
  return Math.floor(Math.random() * maxValue) + a
}
function cheackOffset(a) {
  let b = sumRandomParametrs(80)
  if (a + b > 120) {
    cheackOffset(a, b)
  } else {
    return b
  }
}
function generateColor() {
  let r = sumRandomParametrs(250)
  let g = sumRandomParametrs(250)
  let b = sumRandomParametrs(250)
  let color = [r, g, b]

  const random = Math.floor(Math.random() * color.length)
  color[random] = 0

  return color.join()
}

function readText(a) {
  let text = document.getElementById(a).value
  text = Number.parseInt(text)
  return text
}
