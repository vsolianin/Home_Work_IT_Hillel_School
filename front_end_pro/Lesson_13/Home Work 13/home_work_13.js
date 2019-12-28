window.onload = function() {

	
	var text_area = document.querySelector("#text");
	console.dir(text_area);
	var first_input = document.querySelector("#first_input");
	var second_input = document.querySelector("#second_input");
	var third_input = document.querySelector("#third_input");
	var first = [];
	var second = [];
	var third = [];
	var main = [];
	console.log(main, "main");
	console.log(first, "first");
	first_input.oninput = function(event) {

		if(event.data == null) {
			(function() {
				first.concat(first.pop(event.data));
				text_area.textContent = first.join("");
			}());
		} else {
			(function() {
				first.concat(first.push(event.data));
				text_area.textContent = first.join("");
			}());
		}
		console.log(first, "first");
		console.log(text_area.textContent, "text_area.textContent");
		// console.log(main, "main");
	}

	second_input.oninput = function(event) {

		if(event.data == null) {
			(function() {
				second.concat(second.pop(event.data));
				text_area.textContent = second.join("");
			}());
		} else {
			(function() {
				second.concat(second.push(event.data));
				text_area.textContent = second.join("");
			}());
		}
		
	}

	third_input.oninput = function(event) {

		if(event.data == null) {
			(function() {
				text_area.textContent = text_area.textContent.slice(0, -1);
			}());
		} else {
			(function() {
				text_area.textContent += event.data;
			}());
		}
		console.log(text_area.textContent, "third");
	}

}
