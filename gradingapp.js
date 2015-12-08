// Grading App
function giveGrade() {
  var grade = document.getElementById("grade").value;

  console.log("we're here!");
  alert("hey!");

//Input your code below:
if(grade<=100 && grade>=90) {
  alert("A");
}
else if(grade<=89 && grade>=80) {
  alert("B");
}
if(grade<=79 && grade>=70) {
  alert("C");
}
else if(grade<=69 && grade>=65) {
  alert("D");
}
if(grade<=64) {
  alert("F");
}
}