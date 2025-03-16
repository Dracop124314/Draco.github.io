// Fetch IP Address
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = data.ip;

        // Fetch Geolocation
        return fetch(`https://ipapi.co/${data.ip}/json/`);
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('location').textContent = `${data.city}, ${data.country_name}`;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById('ip').textContent = "Unable to fetch IP";
        document.getElementById('location').textContent = "Unable to fetch location";
    });
