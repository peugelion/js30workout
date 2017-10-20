const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; // px

function shadow(e) {
	// like this
	// const width = hero.offsetWidth;
	// const height = hero.offsetHeight;
	// or this, result is the same
	const {offsetHeight: height, offsetWidth: width} = hero;

	// if I get the event from element that's inside another element
	// offsetX and offsetY (cursor position) will be from the top left corner of the element
	// that is relatively positioned based on the parent elem
	let {offsetX: x, offsetY: y} = e;  // position of the cursor

	// so if this (element on which I setup handler) is different than the event target
	// I need to account the position of the event target element based on the 'this' element 
	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), 
		${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), 
		${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7), 
		${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7) 
	`;
}

hero.addEventListener('mousemove', shadow);