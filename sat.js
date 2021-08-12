function formFillOut() {
  // update Paragraphs
  var getAssignmentName = document.getElementById("assignmentName");
  var assignmentNameOutput = document.getElementById("name");
  assignmentNameOutput.innerHTML =
    "Assignment Name: " + getAssignmentName.value;

  var getDate = document.getElementById("date");
  var dateOutput = document.getElementById("dateOutput");
  dateOutput.innerHTML = "Date: " + getDate.value;

  // update Table
  var myTable = document.getElementById("assignments");
  var row = 1;
  var newRow = myTable.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  cell1.innerHTML = getAssignmentName.value;
  cell2.innerHTML = getDate.value;
  cell3.innerHTML = "<input type='checkbox' id='check'>";
}
function clearInputs() {
  var getAssignmentName = document.getElementById("assignmentName");
  var getDate = document.getElementById("date");
  getAssignmentName.value = "";
  getDate.value = "";
}
