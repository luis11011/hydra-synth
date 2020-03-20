const HydraSynth = require('./../index.js')
const loop = require('raf-loop')

var lastCode = ''

async function loadScript() {

	var file = "jam.js?v="+(new Date())

	// var s = document.createElement("script")
	// s.id = 'the-script'
	// s.type = "text/javascript"
	// s.src = file
	// document.body.appendChild(s)

	var response = await fetch(file)
	var code = await response.text()
	if (lastCode!=code) {
		lastCode = code
		eval(lastCode)
	}
}

var ms = 0
var fps = 32

mul = 1

var msfps = 1000/fps

function init() {

	const canvas = document.createElement('canvas')
	canvas.style.backgroundColor = "#000"
	canvas.width = window.innerWidth / 1.01
	canvas.height = window.innerHeight / 1.01

	canvas.style.width = '100vw'
	canvas.style.height = '100vh'

    document.body.appendChild(canvas)
    
	var hydra = new HydraSynth({
		autoLoop: false,
		canvas: canvas,
		detectAudio: false
		// enableStreamCapture: true,
	})

	window.hydra = hydra

	

	loop((delta) => {
		ms=(ms+delta)
		if (ms>msfps){
			// console.log(1000/ms)
			hydra.tick(ms*mul)
			ms = 0
		}
	}).start()
	
	loadScript()

	setInterval(() => {
		loadScript()
	}, 500)


}

window.onload = init