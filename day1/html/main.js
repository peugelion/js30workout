function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0; // rewind to beginning
	audio.play();

	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;

	this.classList.remove('playing');	
}

const keys = document.querySelectorAll('.key'); console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);