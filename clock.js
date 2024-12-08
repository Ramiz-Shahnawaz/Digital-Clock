
// Function to update the clock
function updateclock() {
    const now = new Date();

    // Extract and format hours
    let hour = now.getHours().toString().padStart(2, '0');
    let merideiem = hour >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hour = hour % 12 || 12; // Convert to 12-hour format

    // Extract and format minutes and seconds
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');

    // Create the time string
    const timestring = `${hour}:${min}:${sec} ${merideiem}`;

    // Update the clock element
    document.getElementById('clock').textContent = timestring;
}

// Initialize the clock and set it to update every second
updateclock();
setInterval(updateclock, 1000);