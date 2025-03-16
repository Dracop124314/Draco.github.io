// script.js

// Function to fetch and display the user's IP and geolocation
function fetchUserIP() {
    // Fetch the user's IP and geolocation data from the ip-api.com API
    fetch('http://ip-api.com/json')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const ip = data.query;             // Get IP address (the IP is under 'query')
            const city = data.city || 'N/A';   // Get city (or 'N/A' if not available)
            const country = data.country || 'N/A'; // Get country (or 'N/A' if not available)
            const location = `${city}, ${country}`; // Combine city and country

            // Replace the "Loading..." text with the actual IP and location
            document.getElementById('ip-address').textContent = ip; 
            document.getElementById('location').textContent = location;

            // Optionally, add a class to the IP to color it red
            document.getElementById('ip-address').classList.add('red-text');
        })
        .catch(error => {
            console.error('Error fetching IP info:', error);
            // If error, show a generic error message
            document.getElementById('ip-address').textContent = 'Unable to fetch IP info';
            document.getElementById('location').textContent = 'Unable to fetch location';
        });
}

// Call the function when the page loads
window.onload = fetchUserIP;
