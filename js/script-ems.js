// CREATE AN ARRAY OF EMPLOYEES
let employees = []; 

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}   

// GET DOM ELEMENTS
const $ = id => document.getElementById(id);
let form =  $('addForm');   
let empTable = $('empTable');



// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    buildGrid();
});   

// ADD EMPLOYEE

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();  

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = $('id').value.trim();
    let empName = $('name').value.trim();
    let empExt = $('extension').value.trim();
    let empEmail = $('email').value.trim();
    let empDept = $('department').value.trim();     
   
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: empId,
        name: empName,
        extension: empExt,
        email: empEmail,
        department: empDept
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();    

});


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm('Are you sure you want to delete this employee?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex - 1; // subtract 1 to account for header row
        console.log(rowIndex);

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1);

        // BUILD THE GRID
        buildGrid();

        
    } else {
        console.log('Delete cancelled');     
    } 

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let empTbody = empTable.getElementsByTagName('tbody')[0];
    if (empTbody) {
        empTable.removeChild(empTbody);
    }


    // REBUILD THE TBODY FROM SCRATCH
    let newTbody = document.createElement('tbody');
    empTable.appendChild(newTbody); 

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employees.forEach((employee) => {
        // REBUILDING THE ROW STRUCTURE. 
        newTbody.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button class="btn btn-danger btn-sm float-end delete">X</button></td>
            </tr>`;

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTable.appendChild(newTbody);

    }); 


    // UPDATE EMPLOYEE COUNT
    $('empCount').innerHTML = employees.length;

    // STORE THE ARRAY IN STORAGE 
    localStorage.setItem('employees', JSON.stringify(employees));    




};