//start by creating a table row to put element into
let myTableRow = document.createElement("tr");
//create
let myTableHeader = document.createElement("th");
myTableHeader.innerHTML = "1";
myTableRow.append(myTableHeader);
let myTableDataFirstName = document.createElement("td");
myTableRow.append(myTableDataFirstName);
myTableDataFirstName.innerHTML = "firstName";
let myTableDataLastName = document.createElement("td");
myTableRow.append(myTableDataLastName);
myTableDataLastName.innerHTML = "lastName";
let myTableDataRole = document.createElement("td");
myTableRow.append(myTableDataRole);
myTableDataRole.innerHTML = "role";
let myTableDataCert = document.createElement("td");
myTableRow.append(myTableDataCert);
myTableDataCert.innerHTML = "cert";

table.appendChild(myTableRow);
console.log(table);
// function addMember(){
//     const firstName = document.getElementById("firstName").value;
//     myTableDataFirstName.innerHTML = (firstName);
// }



console.log(myTableRow);