// add CLOSE btn after LI element

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
	var span = document.createElement("div");
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


// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);


// Create a new list item when clicking on the "Add" button

document.getElementById("addBtn").addEventListener("click", newElement);

function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
		document.getElementById("myInput").style.borderColor = "red";
	} else {
		document.getElementById("myUL").appendChild(li);
		document.getElementById("myInput").style.borderColor = "lightGray";

	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

//add pen symbol
addPen();
function addPen() {
	var i;
	for (i = 0; i < myList.length; i++) {
		var span = document.createElement("span");
		var text = document.createTextNode("\u270E");
		span.className = "pen";
		span.appendChild(text);
		myList[i].appendChild(span);
	}
}

// // pen button edit

// var pen = document.getElementsByClassName("pen");
// var i;
// for (i = 0; i < pen.length; i++) {
// 	pen[i].onclick = function () {
// 		var inner = this.parentElement;
// 		inner.innerHTML = "lol";
		
// 		var span = document.createElement("span");
// 		var text = document.createTextNode("\u270E");
// 		span.className = "pen";
// 		span.appendChild(text);
// 		inner.appendChild(span);

// 		var span2 = document.createElement("span");
// 		var text2 = document.createTextNode("\u00D7");
// 		span2.className = "close";
// 		span2.appendChild(text2);
// 		inner.appendChild(span2);

		
// 	}
// }

















