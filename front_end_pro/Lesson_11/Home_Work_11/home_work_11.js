console.log(`Задача 1. Создать класс SuperMath. Добавить к экземпляру метод - check(obj),
параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя
хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие
znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input()
класса SuperMath.`);

obj = {};

do {
	obj.x = +prompt("Пожалуйста, введите арифметическое значение X");
	obj.y = +prompt("Пожалуйста, введите арифметическое значение Y");		
	obj.znak = prompt("Пожалуйста, введите знак арифметической операции");
} while(isNaN(obj.x) || isNaN(obj.y) || typeof obj.znak !== "string");

SuperMath.prototype.math = function(obj) {
	var math;
		switch(obj.znak) {
			case "+":
			math = obj.x + obj.y;
			break;

			case "-":
			math = obj.x - obj.y;
			break;

			case "/":
			math = obj.x / obj.y;
			break;

			case "%":
			math = obj.x % obj.y;
			break;

			case "*":
			math = obj.x * obj.y;
			break;

			case "^":
			math = obj.x ^ obj.y;
			break;
		}

		return math;
	}

function SuperMath() {
	this.input = function() {
		var obj = {};
		do {
			alert("Пожалуйста, введите новые данные");
			obj.x = +prompt("Пожалуйста, введите арифметическое значение X");
			obj.y = +prompt("Пожалуйста, введите арифметическое значение Y");		
			obj.znak = prompt("Пожалуйста, введите знак арифметической операции");
		} while(isNaN(obj.x) || isNaN(obj.y) || typeof obj.znak !== "string");
		
		return obj;
	}

	this.check = function(obj) {
		var check = confirm("Желаете ли Вы выполнить математическую операцию?");
		if(check) {
			return this.math(obj);
		} else if(!check) {
			obj = this.input();
			return this.math(obj);
		}
	}
}

doMath = new SuperMath();

res = doMath.check(obj);
console.log(res, "res");
