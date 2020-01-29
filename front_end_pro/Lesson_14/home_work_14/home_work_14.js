window.onload = function() {

	var box = document.querySelector('.box');
	console.dir(box, 'box');
	var click = document.querySelector('html');
	console.dir(click, 'click');

	box.onclick = function() {
		this.classList.toggle('colorBorder');	
	}

	click.onclick = function(event) {

		var scaleX = event.clientX;
		var scaleY = event.clientY;

		box.style.left = scaleX + "px";
		box.style.top = scaleY + "px";
	}

	box.onmousedown = function(event) {

		moveAt(event.clientX, event.clientY);

		function moveAt(clientX, clientY) {

			box.style.left = clientX + "px";
			box.style.top = clientY + "px";
		}

		function onMouseMove(event) {
			moveAt(event.clientX, event.clientY);
		}

		document.addEventListener("mousemove", onMouseMove);

		box.ommouseup = function(event) {
			document.removeEventListener("mousemove", onMouseMove);
			box.onmouseup = null;
		};

	};
}