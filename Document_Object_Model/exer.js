var cellContent = document.querySelectorAll("td")
var restart = document.querySelector("button")

function changeContent(){

  if (this.textContent === ""){
    this.textContent = "X";
  } else if(this.textContent === "X"){
    this.textContent = "O";
  } else if (this.textContent === "O"){
    this.textContent = "";
  }
}


for (var j = 0; j < cellContent.length; j++){
  cellContent[j].addEventListener("click", changeContent)
}

function clearAll(){
  for (var i = 0; i < cellContent.length; i++){
    cellContent[i].textContent = "";
  }
}

restart.addEventListener("click",clearAll)
