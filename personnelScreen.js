document.addEventListener("DOMContentLoaded", function () {
  // Fetch personnel data from information.json and create the grid
  fetchPersonnelData();
});

// Function to fetch personnel data and create a 3-column grid
async function fetchPersonnelData() {
  try {
    // Fetch the JSON data (replace with the correct URL if needed)
    const response = await fetch("information.json");
    const data = await response.json();

    // Create personnel grid
    createPersonnelGrid(data.people);
  } catch (error) {
    console.error("Error fetching personnel data:", error);
  }
}

// Function to create a 3-column grid for personnel
function createPersonnelGrid(people) {
  const personnelContainer = document.getElementById("personnelContainer");

  // Create a wrapper div for the grid layout
  const gridContainer = document.createElement("div");
  gridContainer.className = "gridContainer"; // CSS class to be styled in 3 columns

  people.forEach((person, index) => {
    // Create a div for each person in the grid
    const personElement = document.createElement("div");
    personElement.className = `person person-${index}`;

    // Set the inner HTML for the person, including picture, name, major, and bio
    personElement.innerHTML = `
      <div class="personImageContainer">
        <img src="images/brain.png" alt="${person.name}" class="personImage"/>
      </div>
      <div class="personInfo">
        <div class="personName"><strong>${person.name}</strong></div>
        <div class="personBio">${person.bio}</div>
        <div class="personMajor"><strong>Major:</strong> ${person.major}</div>
        <div class="personHometown"><strong>Hometown:</strong> ${person.hometown}</div>
      </div>
    `;

    // Append the person element to the grid container
    gridContainer.appendChild(personElement);
  });

  // Append the grid container to the main personnel container
  personnelContainer.appendChild(gridContainer);
}
