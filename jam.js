/**
 * INPUT VALUES
 */

var duration = 5
bpm(80)

/**
 * CALCULATIONS
 */

// var start = time 
var ar = window.innerHeight / window.innerWidth

var progress = () => (time - start) / duration

/**
 * JAM
 */

osc(40, 0.1, 1)
	.kaleid([5, 7, 11].fast())
	// .thresh(0.35,0.6)
	.blend(o1, [0.99, 0.97, 0.95].ease())
	.modulateHue(o1, 4)
	.saturate(1.03)
	.scale(0.99)
	.out(o1)

solid()
	.add(o1, 1)
	.hue([.5,1].fast(2).ease('sin').smooth(0.3))
	// .color(2,0.5,0.5)
	.color(1.75,0.625,0.625)
	.saturate(0.5)
	.scale(1, 1, 1 / ar)
	.out(o0)

