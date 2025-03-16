// Fetch user's public IP address  
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = data.ip;

        // Fetch geolocation based on IP (HTTPS compatible API)
        return fetch(`https://ipapi.co/${data.ip}/json/`);
    })
    .then(response => response.json())
    .then(locationData => {
        document.getElementById('location').textContent = `${locationData.city}, ${locationData.country_name}`;
    })
    .catch(error => {
        console.error("Error fetching IP or location:", error);
        document.getElementById('ip').textContent = "Unable to fetch IP";
        document.getElementById('location').textContent = "Unable to fetch location";
    });
