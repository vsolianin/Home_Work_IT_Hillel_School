window.onload = function() {
	console.log("Задача. Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.");

	var text_area = document.querySelector("#text");
	text_area.textContent = "";
	var mass = [];
	var inp = document.querySelectorAll("input");
	
	for(i = 0; i < inp.length; i++) {	

		inp[i].onchange = function() {
			mass[mass.length] = this.value;
			setTimeout(function() {
				text_area.textContent = mass;
			}, 500);	
		}
	}
	
	// var text_area = document.querySelector("#text");
	// console.dir(text_area);
	// var first_input = document.querySelector("#first_input");
	// var second_input = document.querySelector("#second_input");
	// var third_input = document.querySelector("#third_input");
	// var first = [];
	// var second = [];
	// var third = [];
	// var start;
	// var selection; 
	// var end;

	// first_input.oninput = function(event) {

	// 	if (selection == undefined && event.data == null) {
	// 		first.concat(first.pop(event.data));
	// 		text_area.textContent = first.join("");

	// 	} else if (start >= 0 && event.data == null) {
	// 		(function() {
	// 			first.splice(start, (end - start));
	// 			text_area.textContent = first.join("");
	// 			start = undefined;
	// 			end = undefined;
	// 			selection = undefined;	
	// 		}());
			
	// 	} else {
	// 		(function() {
	// 			first.concat(first.push(event.data));
	// 			text_area.textContent = first.join("");
	// 		}());
	// 	}
	// }


	// second_input.oninput = function(event) {

	// 	if (selection == undefined && event.data == null) {
	// 		second.concat(second.pop(event.data));
	// 		text_area.textContent = second.join("");

	// 	} else if (start >= 0 && event.data == null) {
	// 		(function() {
	// 			second.splice(start, (end - start));
	// 			text_area.textContent = second.join("");
	// 			start = undefined;
	// 			end = undefined;
	// 			selection = undefined;	
	// 		}());

	// 	} else {
	// 		(function() {
	// 			second.concat(second.push(event.data));
	// 			text_area.textContent = second.join("");
	// 		}());
	// 	}
	// }

	// third_input.oninput = function(event) {

	// 	if (selection == undefined && event.data == null) {
	// 		third.concat(third.pop(event.data));
	// 		text_area.textContent = third.join("");

	// 	} else if (start >= 0 && event.data == null) {
	// 		(function() {
	// 			third.splice(start, (end - start));
	// 			text_area.textContent = third.join("");
	// 			start = undefined;
	// 			end = undefined;
	// 			selection = undefined;	
	// 		}());
			
	// 	} else {
	// 		(function() {
	// 			third.concat(third.push(event.data));
	// 			text_area.textContent = third.join("");
	// 		}());
	// 	}
	// }

	// second_input.onselect = function (event) {
	// 	select(event);
	// }

	// first_input.onselect = function (event) {
	// 	select(event);
	// }

	// third_input.onselect = function (event) {
	// 	select(event);
	// }

	// function select(event) {
	// 	selection = event.target.selectionStart;
	// 	console.dir(event, "onselect");	
	// 	start = event.target.selectionStart;
	// 	end = event.target.selectionEnd;

	// 	return [select, start, end];
	// }
}