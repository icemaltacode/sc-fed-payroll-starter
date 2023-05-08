const LIST_MODE = 1;
const ADD_EMPLOYEE_MODE = 2;
const GENERATE_PAYSLIP_MODE = 3;
const VIEW_PAYSLIP_MODE = 4;

let currentEmployee = -1;

document.addEventListener('DOMContentLoaded', function(e) {
    switchMode(ADD_EMPLOYEE_MODE);
}, false);

document.getElementById('frmAddEmployee').addEventListener('submit', function(e) {
    e.preventDefault();
    switchMode(LIST_MODE);
    addEmployee();
    showEmployees();
    document.getElementById('frmAddEmployee').reset();
});

document.getElementById('frmGeneratePayslip').addEventListener('submit', function(e) {
    e.preventDefault();
    switchMode(VIEW_PAYSLIP_MODE);
    showPayslip();
    document.getElementById('frmGeneratePayslip').reset();
});

document.getElementById('btnCancelAddEmployee').addEventListener('click', function(e) {
    switchMode(LIST_MODE);
});

document.getElementById('btnCancelGeneratePayslip').addEventListener('click', function(e) {
    switchMode(LIST_MODE);
});

document.getElementById('btnAddEmployee').addEventListener('click', function(e) {
    switchMode(ADD_EMPLOYEE_MODE);
});

document.getElementById('employeeStandard').addEventListener('click', function(e) {
    document.getElementById('bonusPercentageArea').style.display = "none";
});
document.getElementById('employeeExecutive').addEventListener('click', function(e) {
    document.getElementById('bonusPercentageArea').style.display = "block";
});

function switchMode(mode) {
    document.getElementById('employeeView').style.display = "none";
    document.getElementById('addEmployeeView').style.display = "none";
    document.getElementById('generatePayslipView').style.display = "none";
    document.getElementById('payslipView').style.display = "none";

    switch(mode) {
        case LIST_MODE:
            document.getElementById('employeeView').style.display = "block";
            break;
        case ADD_EMPLOYEE_MODE:
            document.getElementById('addEmployeeView').style.display = "block";
            break;
        case GENERATE_PAYSLIP_MODE:
            document.getElementById('generatePayslipView').style.display = "block";
            break;
        case VIEW_PAYSLIP_MODE:
            document.getElementById('payslipView').style.display = "block";
    }
}

function generatePayslip(emp) {
    currentEmployee = emp;
    switchMode(GENERATE_PAYSLIP_MODE);
    let empObj = Employee.EMPLOYEES[emp];
    document.getElementById('inputEmployee').value = `${empObj.name} ${empObj.surname}`;

    // TODO finish coding me
}

function showPayslip() {
    // TODO code me
}

function addEmployee() {
    let name = document.getElementById('inputName').value;
    let surname = document.getElementById('inputSurname').value;
    let standardRate = document.getElementById('inputStandardRate').value;
    let overtimeRate = document.getElementById('inputOvertimeRate').value;
    let isStandard = document.getElementById('employeeStandard').checked;

    // TODO finish coding me
}

function showEmployees() {
    // TODO code me
}