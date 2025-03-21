// Setup a timer
var timeout;

// Listen for resize events
const ev = new Event('scroll');
window.addEventListener('scroll', function ( e ) {

	// If there's a timer, cancel it
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

    // Setup the new requestAnimationFrame()
	timeout = window.requestAnimationFrame(function () {

        // Run our scroll functions
        var doc = document.documentElement;
        var top = (doc.scrollTop)  - (doc.clientTop || 0);
        if(top>100) {
            document.querySelector('header').classList.add('sticky');
            document.body.classList.add('hasstickyheader');
        } else {
            document.querySelector('header').classList.remove('sticky');
            document.body.classList.remove('hasstickyheader');
        }

	});

}, false);
window.dispatchEvent(ev);