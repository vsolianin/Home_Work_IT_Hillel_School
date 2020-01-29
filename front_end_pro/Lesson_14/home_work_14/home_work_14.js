window.onload = function() {

	var box = document.querySelector(".box");
	var click = document.querySelector("html");

	box.onclick = function() {
		this.classList.toggle("colorBorder");	
	}

	click.onclick = function(event) {
		console.log(event, "html");

		var scaleX = event.clientX;
		var scaleY = event.clientY;

		box.style.left = scaleX + "px";
		box.style.top = scaleY + "px";
	}

	box.onmousedown = function(event) {

		var layerX = event.layerX;
		var layerY = event.layerY;

		function moveBox(pageX, pageY) {

			box.style.left = pageX - layerX + "px";
			box.style.top = pageY - layerY + "px";
		}

		moveBox(event.pageX, event.pageY);

		function onMouseMove(event) {

			moveBox(event.pageX, event.pageY);
		}

		document.addEventListener("mousemove", onMouseMove);

		box.onmouseup = function(event) {	

			document.removeEventListener("mousemove", onMouseMove);
			moveBox(event.pageX, event.pageY);

			box.onmouseup = null;
			click.onclick = null;

			setTimeout(function() {
				click.onclick = function(event) {
					console.log(event, "html");

					var scaleX = event.clientX;
					var scaleY = event.clientY;

					box.style.left = scaleX + "px";
					box.style.top = scaleY + "px";
				}
			}, .10)
		};

	};
		box.ondragstart = function() {
  			return false;
	};
}