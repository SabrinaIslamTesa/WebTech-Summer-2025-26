//array to store stu info
var studentList = [];

function validation() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var id = document.getElementById("id").value;
    var email = document.getElementById("email").value;
    var credit = document.getElementById("credit").value;
    var dept = document.getElementById("dept").value;

    //initially eroor=0
    var errors = 0;
 

    // First Name Validation
    if (!firstName) {
        document.getElementById("firstNameErr").innerHTML = "First name is required";
        errors++;
    } else {
        document.getElementById("firstNameErr").innerHTML = "";
    }

    //Last Name Validation
    if (!lastName) {
        document.getElementById("lastNameErr").innerHTML = "Last name is required";
        errors++;
    } else {
        document.getElementById("lastNameErr").innerHTML = "";
    }

    //Student ID Validation
    if (!id) {
        document.getElementById("idErr").innerHTML = "Student ID is required";
        errors++;
    } else if (id.indexOf("-") === -1) {
        document.getElementById("idErr").innerHTML = "Student ID must contain '-'";
        errors++;
    } else {
        document.getElementById("idErr").innerHTML = "";
    }

    // Email Validation
    if (!email) {
        document.getElementById("emailErr").innerHTML = "Email is required";
        errors++;
    } else if (email.indexOf("@student.aiub.edu") === -1) {
        document.getElementById("emailErr").innerHTML = "Must contain @student.aiub.edu";
        errors++;
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }

    //Credit Completed Validation
    if (credit === "") {
        document.getElementById("creditErr").innerHTML = "Credit is required";
        errors++;
    } else if (credit < 0 || credit >= 148) {
        document.getElementById("creditErr").innerHTML = "Credit must be between 0 and 147";
        errors++;
    } else {
        document.getElementById("creditErr").innerHTML = "";
    }

    //Department Validation 
    if (dept === "") {
        errors++;
    }

    //If there are 0 errors,the form is valid
    if (errors === 0) {
        var newStudent = {
            firstName: firstName,
            lastName: lastName,
            studentId: id,
            email: email,
            credit: credit,
            department: dept
        };

        studentList.push(newStudent);
        updateListDisplay();

        // Clear all input fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("id").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("dept").value = "";
    }

    return false;
}



//...................used ai..................

function updateListDisplay() {
    var table = document.getElementById("studentTable");
    
    //  table header
    var tableHtml = "<tr>" +
                        "<th>First Name</th>" +
                        "<th>Last Name</th>" +
                        "<th>Student ID</th>" +
                        "<th>Email</th>" +
                        "<th>Credit</th>" +
                        "<th>Dept</th>" +
                    "</tr>";

    // push data
    for (var i = 0; i < studentList.length; i++) {
        var currentStudent = studentList[i];
        
        tableHtml += "<tr>";
        tableHtml += "<td>" + currentStudent.firstName + "</td>";
        tableHtml += "<td>" + currentStudent.lastName + "</td>";
        tableHtml += "<td>" + currentStudent.studentId + "</td>";
        tableHtml += "<td>" + currentStudent.email + "</td>";
        tableHtml += "<td>" + currentStudent.credit + "</td>";
        tableHtml += "<td>" + currentStudent.department + "</td>";
        tableHtml += "</tr>";
    }

    table.innerHTML = tableHtml;
}