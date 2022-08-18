let submitt = document.getElementById('post_comment')
submit.addEventListener('click',function() {

    let userComment = document.getElementById('write_comment').value;

    let newContent = document.createElement('p');
    newElement.innerHTML = userComment;

    let maincontainer = document.getElementById('under');
    maincontainer.appendChild(newContent);
    document.getElementById('write_comment').value = '';
})

//'comment_value' is declared but its value is never read.  (dont know how to solve this) ans: solved. //
// js not working// 






//delete function//

let submit = document.getElementById('deleteButton');
submit.addEventListener('click',function(){
	let inputField = '<input type="text" placeholder="Type Delete and press enter" onchange="DeleteField(this.value)">';

	let newInput = document.getElementById('inputData');
	newInput.innerHTML = inputField;
})

function DeleteField(value) {
  if(value == "Delete" || value == "delete"){
  	document.getElementById("output").style.visibility='hidden';
  	document.getElementById("showMessage").innerHTML='Successfully Delete';
  }else{
  	alert('Wrong keyword type');
  }
}



//js not working//
