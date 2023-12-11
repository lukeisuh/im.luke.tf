function updateSecondsAgo() {
    const { seconds } = calculateYearMonthSecondsCount();
    const secondsAgoText = document.getElementById('seconds-ago');
    secondsAgoText.textContent = `${seconds} seconds ago`;
}

function calculateYearMonthSecondsCount() {
    const birthDate = new Date(2006, 8, 8);
    const currentDate = new Date();
    const secondsDiff = Math.floor((currentDate - birthDate) / 1000);
    return { seconds: secondsDiff };
}


updateSecondsAgo();

setInterval(updateSecondsAgo, 1000);
