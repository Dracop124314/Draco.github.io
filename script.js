// Function to fetch and display the user's IP and geolocation
function fetchIPInfo() {
    // Fetch the user's IP and geolocation data from the ipinfo.io API
    fetch('https://ipinfo.io?token=YOUR_API_TOKEN')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Extract the IP and location data
            const ip = data.ip;
            const city = data.city;
            const country = data.country;
            const location = `${city}, ${country}`;

            // Display the user's IP and location
            document.getElementById('ip-address').textContent = ip; // Display IP
            document.getElementById('location').textContent = location; // Display location

            // Display the IP in red
            document.getElementById('ip-address').classList.add('red-text');
        })
        .catch(error => {
            console.error('Error fetching IP info:', error);
            document.getElementById('ip-address').textContent = 'Unable to fetch IP info';
        });
}

// Call the function to fetch IP info when the page loads
window.onload = fetchIPInfo;
