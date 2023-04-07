// Fetch centers data from ISRO API
fetch("https://isro.vercel.app/api/centres")
  .then((response) => response.json())
  .then((data) => {
    // Check if data is an array or an object
    if (typeof data === "object" && !Array.isArray(data)) {
      // Convert object to array
      data = Object.values(data);
    }

    // Filter centers based on state
    const state = "Karnataka"; // replace with user-selected state
    const filteredCentres = data.filter((centre) => centre.state === state);

    // Display filtered centers on UI
    const centresList = document.getElementById("centres-list");
    filteredCentres.forEach((centre) => {
      const listItem = document.createElement("li");
      listItem.innerText = `${centre.name}, ${centre.city}`;
      centresList.appendChild(listItem);
    });
  });

// Fetch spacecrafts data from ISRO API
fetch("https://isro.vercel.app/api/spacecrafts")
  .then((response) => response.json())
  .then((data) => {
    if (typeof data === "object" && !Array.isArray(data)) {
      // Convert object to array
      data = Object.values(data);
    }
    if (data) {
      // Check if data is defined
      // Display spacecrafts on UI
      const spacecraftsList = document.getElementById("spacecrafts-list");
      data.forEach((spacecraft) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${spacecraft.name} - ${spacecraft.agency}`;
        spacecraftsList.appendChild(listItem);
      });
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  // Fetch launchers data from ISRO API
  fetch("https://isro.vercel.app/api/launchers")
    .then((response) => response.json())
    .then((data) => {
      if (typeof data === "object" && !Array.isArray(data)) {
        // Convert object to array
        data = Object.values(data);
      }
      if (data) {
        // Check if data is defined
        // Display launchers on UI
        const launchersList = document.getElementById("launchers-list");
        data.forEach((launcher) => {
          const listItem = document.createElement("li");
          listItem.innerText = `${launcher.name} - ${launcher.family}`;
          launchersList.appendChild(listItem);
        });
      }
    });
});

// Fetch customer satellites data from ISRO API
fetch("https://isro.vercel.app/api/customer_satellites")
  .then((response) => response.json())
  .then((data) => {
    if (typeof data === "object" && !Array.isArray(data)) {
      // Convert object to array
      data = Object.values(data);
    }
    if (data) {
      // Check if data is defined
      // Filter customer satellites based on country
      const country = "USA"; // replace with user-selected country
      const filteredSatellites = data.filter(
        (satellite) => satellite.country === country
      );

      // Display filtered customer satellites on UI
      const satellitesList = document.getElementById("satellites-list");
      filteredSatellites.forEach((satellite) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${satellite.name} - ${satellite.launch_date}`;
        satellitesList.appendChild(listItem);
      });
    }
  });
