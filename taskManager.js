var getAssignmentName= document.getElementById("assignmentName");
var getClass= document.getElementById("class");
var getAssignedDate= document.getElementById("assignedDate");
var getDueDate= document.getElementById("dueDate");
var getNotes= document.getElementById("notes");
var ID = 0;
function deleteLastEntry(){
    var getTable = document.querySelector("table");
    getTable.deleteRow(1)
    ID = ID - 1;
}
function addEntry(){
    ID = ID + 1; 
    var displayTable = document.querySelector("table")
    var row =1;
    var newRow= displayTable.insertRow(row)
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);
    cell1.innerHTML=ID;
    cell2.innerHTML=getAssignmentName.value;
    cell3.innerHTML=getClass;
    cell4.innerHTML=getAssignedDate;
    cell5.innerHTML=getDueDate;
    cell6.innerHTML="<input type='checkbox'>";
    cell7.innerHTML=getNotes;

}