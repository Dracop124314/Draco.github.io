// Fetch the user's IP address
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // Show IP on the page
        document.getElementById('ip').textContent = data.ip;

        // Fetch geolocation data based on IP
        return fetch(`http://ip-api.com/json/${data.ip}`);
    })
    .then(response => response.json())
    .then(locationData => {
        if (locationData.status === "fail") {
            document.getElementById('location').textContent = "Unable to fetch location";
        } else {
            document.getElementById('location').textContent = `${locationData.city}, ${locationData.country}`;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('ip').textContent = "Unable to fetch IP info";
        document.getElementById('location').textContent = "Unable to fetch location";
    });
