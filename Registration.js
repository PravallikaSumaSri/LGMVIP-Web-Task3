function addStudent() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);
    var image = document.getElementById("image").files[0];
    var website = document.getElementById("website").value;

    // Create a new row in the table
    var table = document.getElementById("studentTable");
    var newRow = table.insertRow(table.rows.length);
    var descriptionCell = newRow.insertCell(0);
    var imageCell = newRow.insertCell(1);

    // Populate the table row
    descriptionCell.innerHTML = `Name: ${name}<br>Email: ${email}<br>Gender: ${gender}<br>Skills: ${skills.join(", ")}<br>Website: <a href="${website}" target="_blank">${website}</a>`;

    var img = document.createElement("img");
    img.src = URL.createObjectURL(image);
    img.classList.add("student-image");
    imageCell.appendChild(img);

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.style.display = "block"; // Display the button as a block element
    deleteButton.style.margin = "35px"; // Center the button horizontally
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };
    newRow.appendChild(deleteButton);

    // Clear the form
    document.getElementById("enrollmentForm").reset();
}
