function createInputs() {
    let n = parseInt(document.getElementById("numSubjects").value);

    if (n < 1 || n > 5 || isNaN(n)) {
        alert("Please enter number of subjects between 1 and 5.");
        return;
    }

    let subjectsDiv = document.getElementById("subjects");
    subjectsDiv.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        subjectsDiv.innerHTML +=
            "<p>Subject " + i +
            ": <input type='number' id='mark" + i +
            "' min='0' max='100'></p>";
    }
}

function calculateGrade() {
    let n = parseInt(document.getElementById("numSubjects").value);

    if (n < 1 || n > 5 || isNaN(n)) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(document.getElementById("mark" + i).value);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Please enter valid marks (0-100) for all subjects.");
            return;
        }

        total += marks;
    }

    let percentage = total / n;
    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "<p>Total Marks: " + total + "</p>" +
        "<p>Percentage: " + percentage.toFixed(2) + "%</p>" +
        "<p>Grade: " + grade + "</p>";
}