window.onload = function() {

function oninput() {
	var text_area = document.querySelector("#text");

	var first_input = document.querySelector("#first_input").value;
	var second_input = document.querySelector("#first_input").value;
	var third_input = document.querySelector("#first_input").value;
	console.log(first_input.length);
	(function() {
		if(i < first_input.length) {
			text_area.value += first_input[i];
			i++;
		}
	}())
}

}

oninput();
