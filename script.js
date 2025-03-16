document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch IP and Location info
    function fetchIPInfo() {
        // Fetch the user's IP and location info from ip-api
        fetch('http://ip-api.com/json/')
            .then(response => response.json())
            .then(data => {
                // Check the status of the response
                if (data.status === 'fail') {
                    document.getElementById('ip').textContent = "Fetching IP address failed.";
                    document.getElementById('location').textContent = "Fetching location failed.";
                } else {
                    // Display the user's IP address and location
                    document.getElementById('ip').textContent = `Your IP Address: ${data.query}`;  // User's IP
                    document.getElementById('location').textContent = `Location: ${data.city}, ${data.country}`; // City and Country
                }
            })
            .catch(error => {
                console.error('Error fetching IP info:', error);
                document.getElementById('ip').textContent = "Fetching IP address failed.";
                document.getElementById('location').textContent = "Fetching location failed.";
            });
    }

    // Fetch the IP info when the page loads
    fetchIPInfo();
});
