// JavaScript
function updateSecondsAgo() {
    const { seconds } = calculateYearMonthSecondsCount();
    const secondsAgoText = document.getElementById('seconds-ago');
    secondsAgoText.textContent = `${seconds} seconds ago`;
}

function calculateYearMonthSecondsCount() {
    const birthDate = new Date(2006, 8, 8); // September is month 8 (0-based)
    const currentDate = new Date();
    const secondsDiff = Math.floor((currentDate - birthDate) / 1000);
    return { seconds: secondsDiff };
}

// Call the update function initially
updateSecondsAgo();

// Update the "x seconds ago" text every second
setInterval(updateSecondsAgo, 1000);
