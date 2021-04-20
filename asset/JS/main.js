//alert("Hello Word!")

/*
	comment
*/

//создание переменных
// 1. var глобальная
// 2. let локальная

var colorArray = [
					"#5A9C6E", 
					"#A8BF5A", 
					"#CCC",
					"#000", 
					"#00FF00"
					]
var i = 0;
function changeColor() {
	document.body.style.background = colorArray[i];
	
	i++;

	//console.log(colorArray[i])  показ кода 


	if (i > colorArray.length -1) {
		i = 0;
	}
}
	function selectColor() {
		let color = document.getElementById("color").value;
		document.body.style.background = color;
		console.log(color);

	}
