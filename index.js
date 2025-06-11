function updateclock()
{
    const current = new Date();
    let hours = current.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const min = current.getMinutes().toString().padStart(2,0);
    const sec = current.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${min}:${sec} ${meridiem}`
    document.getElementById("clock").textContent = time;
}

updateclock();
setInterval(updateclock, 1000);