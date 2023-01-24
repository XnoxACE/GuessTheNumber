let number = Math.floor(Math.random() * 10);
console.log(number)
var text_input = document.getElementById("textInput");
text_input.addEventListener("keypress",function(event) {
	console.log(event.code)
	if (event.code != "Enter")
		return;
// will only get here when return key is pressed.
//handle to a newly created list item.
	//var list_item = document.createElement("li");
	//list_item.textContent = text_input.value;

//handle to the unordered list element.
	//var list = document.getElementById("playlist");
	//list.appendChild(list_item);
	text_input.value = "";
});

function init()
{

	
}
function handleButtonClick()
{
	
}
function getResponce(responce){

    var list = document.getElementById("playlist");
	//list.appendChild(list_item);
    if(responce == NaN){
        return;
    }
    else if(responce > number){
        var li = document.createElement("li");
	    list.appendChild("Number is too big");
    }
    else if(responce < number){
        var li = document.createElement("li");
	    list.appendChild("Number is too big");
    }
}
window.onload = init;