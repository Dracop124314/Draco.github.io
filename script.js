async function fetchIP() {
    try {
        let ipResponse = await fetch("https://api64.ipify.org?format=json");
        let ipData = await ipResponse.json();
        document.getElementById("ip").textContent = ipData.ip;
        
        let geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        let geoData = await geoResponse.json();

        if (geoData.city && geoData.country_name) {
            document.getElementById("location").textContent = `${geoData.city}, ${geoData.country_name}`;
        } else {
            document.getElementById("location").textContent = "Unable to fetch location";
        }

    } catch (error) {
        document.getElementById("ip").textContent = "Unable to fetch IP";
        document.getElementById("location").textContent = "Unable to fetch location";
    }
}

fetchIP();
