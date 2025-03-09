//TASK2
// Function to create an employee card
function createEmployeeCard(name, position) {
    // Create the card container
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Add employee name
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    card.appendChild(nameHeading);

    // Add employee position
    const positionPara = document.createElement("p");
    positionPara.textContent = position;
    card.appendChild(positionPara);

    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    
    card.appendChild(removeButton);

    // Append the card to the employee container
    document.getElementById("employeeContainer").appendChild(card);
}

// Example: Adding a few employee cards for testing
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Product Manager");
createEmployeeCard("Alice Johnson", "UX Designer");
