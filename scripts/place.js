document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

let windChillText = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
  windChillText = calculateWindChill(temp, windSpeed) + "°C";
}
document.getElementById("windChill").textContent = windChillText;
