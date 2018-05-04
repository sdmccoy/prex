'use strict'

const winWidth = window.innerWidth
const winHeight = window.innerHeight

const comicList = require('./comicList.js')

console.log('cl = ', comicList )


const getRdmTop = () => {
  let currentTop = Math.floor(trex.getBoundingClientRect().top)
  let currentBttm = Math.floor(trex.getBoundingClientRect().bottom)
  const imgHeight = Math.floor(trex.getBoundingClientRect().height)
  console.log('cur top', currentTop, 'cur btm', currentBttm);
  console.log('win height = ', winHeight)
  console.log('img height = ', imgHeight)  
  if (currentTop < currentBttm) {
    let maxMove = winHeight - (currentTop + imgHeight)
    let minMove = imgHeight - currentTop
    console.log('move down, max top = ', maxMove);
    
    return Math.floor(Math.random() * maxMove)
  } else {
    let maxMove = winHeight - (currentBttm + imgHeight)
    let minMove = imgHeight - currentBttm
    console.log('move up, top = ', maxMove);
    return Math.floor(Math.random() * maxMove)
  }
}

const getRdmLeft = () => {
  let currentRight = Math.floor(trex.getBoundingClientRect().right)
  let currentLeft = Math.floor(trex.getBoundingClientRect().left)
  console.log('cur right = ', currentRight);
  console.log('cur left = ', currentLeft);
  console.log('win width = ', winWidth)
  const imgWidth = Math.floor(trex.getBoundingClientRect().width)
  if (currentRight > currentLeft) {
    let maxMove = winWidth - (currentLeft + imgWidth)
    return Math.floor(Math.random() * maxMove)
  } else {
    let maxMove = winWidth - (currentRight + imgWidth)
    console.log('max move, left = ', maxMove);
    return Math.floor(Math.random() * maxMove)
  }
}

let counter = 0
const moveit = (e) => {
  let rdmTop = getRdmTop() + 'px'
  let rdmLeft = getRdmLeft() + 'px'

  console.log('rdm top' , rdmTop, 'rdm right', rdmLeft)
  ++counter
  console.log('coutner = ', counter)
  if (counter === 5) {
    console.log('style = ', e.target.style)
    console.log('target = ', e.target)
    document.getElementById('trex').className = 'spinMe'
    // make function to cycle through comics

    counter = 0
    
  } else {
    e.target.style.top = rdmTop
    e.target.style.left = rdmLeft
    console.log('break 2 = ', )
    console.log('style = ', e.target.style)
  }
  
}

let trex = document.getElementById('trex')

// trex.addEventListener('mouseover', moveit)
trex.addEventListener('mousemove', moveit)
trex.addEventListener('click', moveit)
trex.addEventListener('auxclick', moveit)