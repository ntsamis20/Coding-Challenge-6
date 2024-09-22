// Task 1 Create array of employees and objects
const employees = [
    { name: 'Spongebob', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Squidward', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'Stewie', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Meg', shifts: [{ day: 'Friday', hours: 8 }] }
];

// Task 2 Create Function to display employee shift details
function displayEmployeeShifts(empployee) {
    console.log(`Employee Name: ${employee.name}`);

    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`);
    });
}

// Task 3 Create a function to assign a new shift
function assignShift(employeeName, day, hours, employees) {
    const employee = employees.find(emp => emp.name === employeeName);
    
    if (!employee) {
        console.log(`Error: Employee ${employeeName} not in the system.`);
        return;
    }
    const shiftExists = employee.shifts.some(shift => shift.day === day);
    
    if (shiftExists) {
        console.log(`Error: ${employeeName} is working on ${day}.`);
    } else {
        employee.shifts.push({ day: day, hours: hours });
        console.log(`Shift added: ${employeeName} will work ${day} for ${hours} hours.`);
    }
}

// Task 4 Create total hours worked function
function calculateTotalHours(employeeName, employees) {
    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    console.log(`${employeeName} has worked ${totslHours} hours this week.`);
    return totalHours;
}

// Task 5 Create function to list employees with free days
function listAvailableEmployees(day, employees) {
    const availableEmployees = employees.filter(employee => 
        !employee.shifts.some(shift => shift.day === day)
    );

    if (availableEmployees.length === 0) {
        console.log(`No employees available ${day}.`);
    } else {
        console.log(`Employees are available on ${day}:`);
        availableEmployees.forEach(employee => console.log(employee.name));
    }
}
