const axios = require('axios');

// Function to fetch visitor's location based on IP address
async function getVisitorLocation(ipAddress) {
    try {
        const response = await axios.get(`https://ipinfo.io/${ipAddress}/json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching location:', error.message);
        throw error;
    }
}

module.exports = getVisitorLocation;