async function fetchIP() {
    try {
        // Get IP address using HTTPS API
        let ipResponse = await fetch("https://api64.ipify.org?format=json");
        let ipData = await ipResponse.json();
        document.getElementById("ip").textContent = ipData.ip;

        // Get geolocation securely
        let geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        let geoData = await geoResponse.json();

        if (geoData.city && geoData.country_name) {
            document.getElementById("location").textContent = `${geoData.city}, ${geoData.country_name}`;
        } else {
            document.getElementById("location").textContent = "Unable to fetch location";
        }

    } catch (error) {
        document.getElementById("ip").textContent = "Unable to fetch IP info";
        document.getElementById("location").textContent = "Unable to fetch location";
        console.error("Error fetching data:", error);
    }
}

fetchIP();
