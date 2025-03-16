// Fetch user's IP address and geolocation information
function fetchUserIP() {
    // Use your provided token
    fetch('https://ipinfo.io/json?token=63383f4df16b70')  // Your token added here
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            console.log(data); // Log the response to the console for debugging
            const ip = data.ip || 'N/A'; // Get the user's IP address
            const city = data.city || 'N/A'; // Get city (or 'N/A' if not available)
            const country = data.country || 'N/A'; // Get country (or 'N/A' if not available)
            const location = `${city}, ${country}`; // Combine city and country for location

            // Replace the text "Loading..." with actual data
            document.getElementById('ip-address').textContent = ip;
            document.getElementById('location').textContent = location;
        })
        .catch(error => {
            console.error('Error fetching IP info:', error);
            // If an error occurs, display a generic error message
            document.getElementById('ip-address').textContent = 'Unable to fetch IP info';
            document.getElementById('location').textContent = 'Unable to fetch location';
        });
}

// Call the function when the page loads
window.onload = fetchUserIP;
