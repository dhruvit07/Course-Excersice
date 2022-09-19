var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listArray = document.getElementsByTagName('li');
var listDeleteButtonArray = document.querySelectorAll("li button");


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < listDeleteButtonArray.length; i++) {
	addEventListenerToListDeleteButton(listDeleteButtonArray[i]);
}

for (var i = 0; i < listArray.length; i++) {
	addEventListenerToList(listArray[i]);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addEventListenerToList(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	addEventListenerToListDeleteButton(button);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function ToggleListItem(){
	this.classList.toggle('done');
}

function deleteListItem(){
	this.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}
function addEventListenerToList(listItem){
	listItem.addEventListener('click', ToggleListItem);
}
function addEventListenerToListDeleteButton(button){
	button.addEventListener('click', deleteListItem);
}

