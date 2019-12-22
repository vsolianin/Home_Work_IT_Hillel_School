console.log("Задача 1. Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так, что бы можно было вызывать любые комбинации");
console.log("obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()");
console.log("clear() очищает значение obj.result в 0");
console.log("- copy(buffer) получает параметром название ключа buffer (string) и добавляет его к obj Далее в любом порядке можно вызывать комбинации функций");

function sum(x, y) {
	var sum = x + y;
	return sum;
}

function mul(x, y) {
	var mul = x * y;
	return mul;
}

obj = {
	result: {},

	copy(buffer) {
		this[buffer] = {};
		this.name = buffer;

		return this;
	},

	clear() {
		if(this.name) {
			delete this[this.name];
			delete this.name;
		} else {
			this.result = {};
		}

		return this;
	},

	doFunction(func, x, y) {
		if(func == sum && (this.name)) {
			this[this.name]["sum"] = func(x, y);

		} else if(func == mul && (this.name)) {
			this[this.name]["mul"] = func(x, y);

		} else if(func == sum) {
			this.result["sum"] = func(x, y);

		} else if(func == mul) {
			this.result["mul"] = func(x, y);

		}	

		return this;
	}
}

obj.doFunction(sum, 5, 7).doFunction(mul, 5, 7).clear().doFunction(sum, 6, 0).copy("target").doFunction(mul, 5, 7);
console.log(obj, "obj");
console.log("");


console.log("Задача 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.");

string = "var_text_hello";

function text(string) {
	string = string.split("_");
	for(i = 1; i < string.length; i++) {
		string[i] = string[i][0].toUpperCase() + string[i].slice(1);
	}

	return string.join("");
}

res = text(string);
console.log(res, "res");
console.log("");

console.log(`Задача 3. Сделайте функцию inArray, которая определяет, есть в массиве элемент
с заданным текстом или нет. Функция первым параметром должна принимать текст элемента,
а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.`);

function inArray(str, mass) {
	for(i = 0, counter = 0; i < mass.length; i++) {

		if(mass[i].includes(str)) {
			counter++;
		}
	}
	console.log(counter, "Количество совпадений подстроки в элементах массива");

	if(counter > 0) {
		return true;
	} else {
		return false;
	}
}

res = inArray("oo", ["sjhfnaof", "affooasf", "dfhdfoohdfh"]);
console.log(res, "res");

