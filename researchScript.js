// Fetch and populate research sections and sidebar links when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const sidebar = document.querySelector(".sideBar");

  // Menu button event listener for showing the sidebar
  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    showSidebar();
  });

  // Click outside the sidebar to hide it
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      hideSidebar();
    }
  });

  // Fetch and display research sections and sidebar links
  createTable();
});

// Function to fetch the JSON data and create research sections and sidebar links
async function createTable() {
  try {
    // Fetch the JSON data (replace with the correct URL or path)
    const response = await fetch("information.json");
    const data = await response.json();

    // Create the research section
    createResearchSection(data.research);

    // Dynamically create sidebar links based on research names
    createSidebarLinks(data.research);
    
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Function to create the research section with text on the left and image on the right
function createResearchSection(research) {
  const researchContainer = document.getElementById("researchContainer");

  research.forEach((researchItem, index) => {
    const researchElement = document.createElement("div");
    researchElement.className = `research research-${index}`;
    researchElement.id = `research-${researchItem.name.toLowerCase()}`; // Assign an ID based on the research name
    
    // Create a wrapper div to contain both text and image
    researchElement.innerHTML = `
      <div class="researchWrapper" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border: 1px solid #ddd; margin-bottom: 20px;">
        <div class="researchText" style="flex: 1;">
          <h3>${researchItem.name}</h3>
          <p>${researchItem.text}</p>
        </div>
        <div class="researchImage" style="flex: 1; text-align: right;">
          <img src="images/brain.png" alt="${researchItem.name}" style="max-width: 300px; max-height: 200px; border-radius: 10px;">
        </div>
      </div>
    `;

    researchContainer.appendChild(researchElement);
  });
}

// Function to dynamically create sidebar links based on the research names
function createSidebarLinks(research) {
  const sidebar = document.querySelector(".sideBar");

  research.forEach((researchItem) => {
    const link = document.createElement("a");
    link.href = `#research-${researchItem.name.toLowerCase()}`;
    link.textContent = researchItem.name;
    link.className = `${researchItem.name.toLowerCase()}Link sidebarLink`; // Add a general class for styling

    // Apply inline styles to match the design
    link.style.textDecoration = "none";
    link.style.color = "var(--mainBackgroundColor)";
    link.style.marginLeft = "5%";

    // Add smooth scrolling and hide sidebar when clicked
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById(`research-${researchItem.name.toLowerCase()}`).scrollIntoView({ behavior: "smooth" });
      hideSidebar();
    });

    sidebar.appendChild(link);
  });
}

// Function to show the sidebar
function showSidebar() {
  const sidebar = document.querySelector(".sideBar");
  sidebar.style.transform = "translateX(0)";
}

// Function to hide the sidebar
function hideSidebar() {
  const sidebar = document.querySelector(".sideBar");
  sidebar.style.transform = "translateX(-100%)";
}
