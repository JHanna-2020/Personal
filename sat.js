  function clear() {
      document.getElementById("bookTitleInput").value = "";
      document.getElementById("authorInput").value = "";
      document.getElementById("authorInput").value = "";
      }
  function load() {
    document.getElementById("bookForm").style.display === "none";
  }
  
  var arr = new Array();
  function addBook() {
    getBook();
    arr.push({
      bookTitleInput: document.getElementById("bookTitleInput").value,
      authorInput: document.getElementById("authorInput").value,
    });
    localStorage.setItem("Book Title", JSON.stringify(arr));
  }
  
  function getBook() {
    var str = localStorage.getItem("Book Title");
    if (str != null) {
      arr = JSON.parse(str);
    }
  }
  function test(){
  }
    
  function updateTable() {
      getBook();
    var displayInTable = document.getElementById("table");
  
    var x= displayInTable.rows.length;
    while(--x){
        displayInTable.deleteRow(x);
    }
   
    for (i = 0; i < arr.length; i++) {
      var title = document.getElementById("bookTitleInput").value;
      var author = document.getElementById("authorInput").value;
    //   var genre = document.getElementById("genreSelect").value;
      var row = 1;
      var newRow = displayInTable.insertRow(row);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      cell1.innerHTML = arr[i].bookTitleInput;
      cell2.innerHTML = arr[i].authorInput;
      cell3.innerHTML = "<input type='checkbox' onclick='test();'>"
    }
  }
  //book notes part of website 
  