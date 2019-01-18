var firstname = prompt("what's your first name?");
var lastname = prompt("what's your last name?");
var age = prompt("what's your age?");
var height = prompt("how tall are you (in cm)?");
var pet = prompt("what's the name of your pet?")

if (firstname[0] == lastname[0] && age >20 && age < 30 && height >= 170 && pet[pet.length-1] == "y") {
  console.log("Welcome");
} else {
  console.log("Sorry");
}
