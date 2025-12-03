// Function to get the name from the URL query parameter
function getNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let name = urlParams.get('name') || 'Guest';  // Default to 'Guest' if no name is provided
    // Decode the name to handle spaces and special characters (like Khmer)
    return decodeURIComponent(name);
}

// Function to set the guest name in the input box
function setGuestName() {
    const guestName = getNameFromURL();
    document.getElementById('guest-name').value = guestName;
}

// Function to open the Canva link
function openCanva() {
    const canvaLink = "https://saktheary-wedding.my.canva.site/";  // Replace this with your desired Canva link
    window.open(canvaLink, '_blank');
}

// Set the guest name when the page loads
window.onload = setGuestName;
