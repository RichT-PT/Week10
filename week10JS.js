
// let button = document.getElementById("submit");

// console.log(button);

const tableRows = [
    {
        firstName: "James",
        lastName: "Dunkle",
        role: "President",
        certLevel: "PSD",
    },
];
function populateTable() {   // make a row for each member
    for(const member of tableRows){
        const row = document.createElement("tr");
    }
}
function createTable() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    
    // make the columns for each member
    // add data for each column
    // add the row to the tableBody
    
    table.appendChild(tableBody);                // add tableBody to table
    const root = document.getElementById("root");
    root.appendChild(table);                     // add table to documents
}
// createTable();
// const collection = document.body.children;
// let text = "";
// for(let i = 0; i < collection.length; i++){
//     text += collection[i].tagName + "<br>";
// }

