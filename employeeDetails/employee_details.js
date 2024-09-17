const employees = [
    { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
    { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
    {
        id: 3,
        name: "Bob Johnson",
        age: 35,
        department: "Finance",
        salary: 60000,
    },
    {
        id: 4,
        name: "Jane Brown",
        age: 26,
        department: "Marketing",
        salary: 40000,
    },
    {
        id: 5,
        name: "Mike Davis",
        age: 32,
        department: "Finance",
        salary: 55000,
    },
    { id: 6, name: "Mary Wilson", age: 29, department: "IT", salary: 51000 },
    {
        id: 7,
        name: "Tom Clark",
        age: 33,
        department: "Marketing",
        salary: 46000,
    },
    { id: 8, name: "Ann Lee", age: 31, department: "HR", salary: 47000 },
    { id: 9, name: "Karen Young", age: 34, department: "IT", salary: 52000 },
    { id: 10, name: "Peter Hall", age: 27, department: "IT", salary: 53000 },
];

// Function to display all employees.
const totalEmployees = employees
    .map(
        (employee, index) =>
            `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
document.getElementById("employeesDetails").innerHTML = totalEmployees;

function displayEmployees() {
    document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce(
        (acc, employee) => acc + employee.salary,
        0
    );
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(
        (employee) => employee.department === "HR"
    );
    const hrEmployeesDisplay = hrEmployees
        .map(
            (employee, index) =>
                `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        )
        .join("");
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(
        (employee) => employee.id === employeeId
    );
    if (foundEmployee) {
        document.getElementById(
            "employeesDetails"
        ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById("employeesDetails").innerHTML =
            "no employee has been found with this ID";
    }
}
