const divs = document.querySelectorAll('div');

function logText(e) {
	console.log(this.classList.value);
	//e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
	capture: false  // this means to run event handler on the way down, while 
								 // capturing the click event
	once: true  // this will remove event listener after the first click event is fired
}));