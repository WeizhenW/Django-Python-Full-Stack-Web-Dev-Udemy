

var roster = [];
var input = "empty"
var start = prompt("would you like to start? y/n")

if (start === 'y') {

  while (input != "quit") {

    input = prompt("do you like to add, remove, display or quit?");

    if(input == "add"){
      addNew();
    } else if (input == "display") {
      console.log(roster);
    } else if (input == "remove") {
      remove();
    }

  }

}

alert("Thanks for using the web app, please refresh!");

//add

function addNew(){
  var name = prompt("what name would you add?");
  roster.push(name);
}

//remove

function remove(){
  var name = prompt("what name would you remove?");
  roster.splice(roster.indexOf(name),1);
}
