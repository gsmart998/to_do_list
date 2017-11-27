// add CLOSE btn after LI element

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
	var span = document.createElement("span");
	var text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	myList[i].appendChild(span);
}

// hide LI elem

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// add checked marker V

var test = document.getElementsByClassName("test");
test.addEventListener("click", alert("lol"));