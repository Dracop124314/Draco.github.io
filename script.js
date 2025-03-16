fetch('https://api.ipify.org?format=json')  
    .then(response => response.json())  
    .then(data => {  
        document.getElementById('ip').textContent = data.ip;  
    })  
    .catch(error => {  
        console.error("Error fetching IP:", error);  
        document.getElementById('ip').textContent = "Unable to fetch IP";  
    });
