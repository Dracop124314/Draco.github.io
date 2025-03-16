fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        let userIP = data.ip;
        document.getElementById('ip').textContent = userIP;

        // Send the IP to your logging service
        fetch('YOUR_REQUESTBIN_URL_HERE', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip: userIP, timestamp: new Date() })
        });
    })
    .catch(error => console.error("Error fetching IP:", error));
