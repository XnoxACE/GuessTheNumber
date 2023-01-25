let number = Math.floor(Math.random() * 10);
console.log(number)



var text_input = document.getElementById("textInput");


text_input.addEventListener("keypress",function(event) {
	
	if (event.code != "Enter")
		return;
	numCheck(text_input.value);
	text_input.value = "";
});

function numCheck(numGuessed){
  

    let listNode = document.getElementById("playlist");
    let liNode = document.createElement("li");
    let correctNode = document.createTextNode("Correct");
    let smallNode = document.createTextNode("Number is too small");
    let bigNode = document.createTextNode("Number is too Big");

    if(numGuessed == NaN || numGuessed == ""){
        console.log("1");
        return;
    }
    else if(numGuessed == number){
        console.log("2")
        liNode.appendChild(correctNode);
        listNode.appendChild(liNode);
    }
    else if(numGuessed < number){
        liNode.appendChild(smallNode);
        listNode.appendChild(liNode);
    }
    else if(numGuessed > number){
        liNode.appendChild(bigNode);
        listNode.appendChild(liNode);
    }




    
   

    
}




