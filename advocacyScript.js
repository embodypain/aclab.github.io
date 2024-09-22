async function createTimeLine() {
    try {
      // Fetch the JSON data (you need to replace the URL if it's different)
      const response = await fetch("information.json"); 
      const data = await response.json();
  
      // Get the timeline container
      const timelineContainer = document.getElementById("timelineContainer");
  
      // Loop through each entry and create HTML elements dynamically
      data["eventsInformation"].forEach((entry, index) => {
        const event = document.createElement("div"); // Create a new div for each event
        event.className = `event event-${index}`; // Assign a unique class name
  
        // Set the inner HTML of the event div based on the entry data
        event.innerHTML = `
          <div class="datesContainer">${entry.date}</div>
          <div class="eventsContainer">
            <div class="eventFront">
                <div class="eventLeft">
                    <div class="eventTitle">${entry.title}</div>
                    <img class="eventPic" src="images/brain.png">
                    <div class="eventLocation">${entry.location}</div>
                </div>
                <div class="eventRight">
                    <div class="eventText">${entry.text}</div>
                </div>

            </div>
          </div>
        `;
  
        // Append the event to the timeline container
        timelineContainer.appendChild(event);
      });
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }
  
  // Call the createTimeLine function when the window loads
  window.onload = createTimeLine;
  