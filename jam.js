var duration = 5

// var start = time 
var ar = window.innerHeight / window.innerWidth

var progress = () => (time - start) / duration

mul = 1


var e = 0.0001

start = time

duration = 10 // seconds

intensity = () => Math.min((time-start)/duration,1)

// noise(2)
// 	.contrast(0.5)
// 	.brightness(-0.25)
// 	.add(o2,0.2)
// 	.scale(1.2,ar)
// 	.mask(shape(4,0,0.5).scale(1.25,ar))
// 	.out(o2)
var ar = (window.innerHeight / window.innerWidth) - 0.02
var rs = 0.67

osc(30,0.05)
	.modulate(noise(2))
	.scale(1.2*rs,ar)
	.mask(shape(80,0,0.5).scale(1.125*rs,ar))
	.out(o2)

osc(179,0.01,0.4)
	.rotate(Math.PI/2)
	.darker(osc(10,0.1,1),1)
	.lighter(solid(0.07,0.07,0.12),1)
	.modulate(o2)
	.mask(shape(4,0.5,0.02).scale(rs,ar))
	// .clamp()
	// .shift(0,0,0.1,0)
	.out(o0)