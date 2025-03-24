// Show the login form and hide the signup form
function showLoginForm() {
    document.getElementById('loginFormContainer').classList.add('active');
    document.getElementById('signupFormContainer').classList.remove('active');
}

// Show the signup form and hide the login form
function showSignUpForm() {
    document.getElementById('signupFormContainer').classList.add('active');
    document.getElementById('loginFormContainer').classList.remove('active');
}

// Handle login form submission
function handleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/hr/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
            })
            .then(response => response.text())
            .then(message => {
                document.getElementById('loginMessage').textContent = message;
                if (message.includes("successful")) {
                    // Redirect to employee list page after 2 seconds
                    setTimeout(() => {
                        window.location.href = '/employees.html';
                    }, 2000);
                }
            });
        });
    }
}

// Handle sign-up form submission
function handleSignUpForm() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const hrUser = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                username: document.getElementById('newUsername').value,
                password: document.getElementById('newPassword').value
            };

            fetch('/api/hr/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(hrUser)
            })
            .then(response => response.text())
            .then(message => {
                document.getElementById('signupMessage').textContent = message;
                if (message.includes("successful")) {
                    // Redirect to login form after 2 seconds
                    setTimeout(() => {
                        showLoginForm();
                    }, 2000);
                }
            });
        });
    }
}
// Initialize functions based on the current page
document.addEventListener('DOMContentLoaded', function () {
    handleLoginForm(); // For login form
    handleSignUpForm(); // For sign-up form
});
// Show the Employee List section and hide others
function showEmployeeList() {
    document.getElementById('employeeListSection').classList.add('active');
    document.getElementById('addEmployeeSection').classList.remove('active');
    document.getElementById('editEmployeeSection').classList.remove('active');
    fetchEmployees(); // Refresh the employee list
}

// Show the Add Employee section and hide others
function showAddEmployeeForm() {
    document.getElementById('addEmployeeSection').classList.add('active');
    document.getElementById('employeeListSection').classList.remove('active');
    document.getElementById('editEmployeeSection').classList.remove('active');
}

// Show the Edit Employee section and hide others
function showEditEmployeeForm(employeeId) {
    document.getElementById('editEmployeeSection').classList.add('active');
    document.getElementById('employeeListSection').classList.remove('active');
    document.getElementById('addEmployeeSection').classList.remove('active');

    // Fetch employee details and populate the edit form
    fetch(`/api/employees/${employeeId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Employee not found');
            }
            return response.json();
        })
        .then(employee => {
            // Populate the form fields with employee details
            document.getElementById('editName').value = employee.name;
            document.getElementById('editDepartment').value = employee.department;
            document.getElementById('editEmail').value = employee.email;
            document.getElementById('editSalary').value = employee.salary;

            // Store the employee ID in the form for later use
            document.getElementById('editEmployeeForm').dataset.employeeId = employeeId;
        })
        .catch(error => {
            console.error('Error fetching employee details:', error);
            alert('Failed to fetch employee details. Please try again.');
        });
}

// Fetch and display employees
function fetchEmployees() {
    fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('employeeTable');
            tableBody.innerHTML = ''; // Clear existing rows
            data.forEach(employee => {
                const row = `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.email}</td>
                    <td>${employee.salary}</td>
                    <td>
                        <button onclick="showEditEmployeeForm(${employee.id})">Edit</button>
                        <button onclick="deleteEmployee(${employee.id})">Delete</button>
                    </td>
                </tr>`;
                tableBody.insertAdjacentHTML('beforeend', row);
            });
        });
}


// Handle Add Employee form submission
function handleAddEmployeeForm() {
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    if (addEmployeeForm) {
        addEmployeeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const employee = {
                name: document.getElementById('name').value,
                department: document.getElementById('department').value,
                email: document.getElementById('email').value,
                salary: parseFloat(document.getElementById('salary').value)
            };

            fetch('/api/employees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employee)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add employee');
                }
                return response.json();
            })
            .then(data => {
                // Display success message
                document.getElementById('addEmployeeMessage').textContent = 'Employee added successfully!';
                
                // Clear the form fields
                addEmployeeForm.reset();

                // Redirect to the Employee List page after 2 seconds
                setTimeout(() => {
                    showEmployeeList(); // Switch to the Employee List section
                }, 2000);
            })
            .catch(error => {
                console.error('Error adding employee:', error);
                document.getElementById('addEmployeeMessage').textContent = 'Failed to add employee. Please try again.';
            });
        });
    }
}

// Handle Edit Employee form submission
function handleEditEmployeeForm() {
    const editEmployeeForm = document.getElementById('editEmployeeForm');
    if (editEmployeeForm) {
        editEmployeeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const employeeId = editEmployeeForm.dataset.employeeId;
            const employee = {
                name: document.getElementById('editName').value,
                department: document.getElementById('editDepartment').value,
                email: document.getElementById('editEmail').value,
                salary: parseFloat(document.getElementById('editSalary').value)
            };

            fetch(`/api/employees/${employeeId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employee)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update employee');
                }
                return response.json();
            })
            .then(data => {
                // Display success message
                document.getElementById('editEmployeeMessage').textContent = 'Employee updated successfully!';
                
                // Redirect to the Employee List page after 2 seconds
                setTimeout(() => {
                    showEmployeeList(); // Switch to the Employee List section
                }, 2000);
            })
            .catch(error => {
                console.error('Error updating employee:', error);
                document.getElementById('editEmployeeMessage').textContent = 'Failed to update employee. Please try again.';
            });
        });
    }
}

// Handle Delete Employee
function deleteEmployee(employeeId) {
    if (confirm('Are you sure you want to delete this employee?')) {
        fetch(`/api/employees/${employeeId}`, { method: 'DELETE' })
            .then(() => fetchEmployees()); // Refresh the employee list
    }
}

// Initialize functions based on the current page
document.addEventListener('DOMContentLoaded', function () {
    showEmployeeList(); // Show the employee list by default
    handleAddEmployeeForm(); // Handle add employee form submission
    handleEditEmployeeForm(); // Handle edit employee form submission
});