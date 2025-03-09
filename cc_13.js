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


//TASK3
// Function to highlight all employee cards
function highlightEmployeeCards() {
    // Select all employee cards
    const employeeCards = document.querySelectorAll(".employee-card");

    // Convert NodeList to an array
    const cardsArray = Array.from(employeeCards);

    // Apply a style update to each card
    cardsArray.forEach((card) => {
        card.style.backgroundColor = "#f0f8ff"; // Light blue background
        card.style.border = "2px solid #007bff"; // Blue border
    });
}

// Call the function to highlight cards
highlightEmployeeCards();


//TASK4
// Add event listener to the employee container for event bubbling
const employeeContainer = document.getElementById("employeeContainer");
employeeContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        // If the clicked element is a button, remove the card
        const card = event.target.closest(".employee-card");
        if (card) {
            card.remove();
        }
        // Stop event bubbling
	    event.stopPropagation();
    } else {
        // Log a message when any card is clicked
        console.log("Employee card clicked!");
    }
});

