const races = [
  "BMW Berlin Marathon", "Boston Marathon", "Bank of America Chicago Marathon",
  "TCS London Marathon", "TCS New York City Marathon", "TCS Sydney Marathon",
  "Tokyo Marathon", "Shanghai Marathon", "Sanlam Cape Town Marathon",
  "Taipei Marathon", "Hong Kong 100", "Credit Union Cherry Blossom 10 Mile Run",
  "Big Sur International Marathon", "Osaka Marathon",
  "Valencia Marathon Trinidad Alfonso Zurich", "NN Marathon Rotterdam",
  "Copenhagen Marathon", "Irish Life Dublin Marathon", "Kyoto Marathon",
  "Fukuoka Marathon", "Nagoya Women's Marathon", "Kumamoto Castle Marathon",
  "United Airlines NYC Half", "RBC Brooklyn Half", "Royal Parks Half Marathon",
  "AJ Bell Great North Run", "London Landmarks Half Marathon",
  "GENERALI Berlin Half Marathon", "Copenhagen Half Marathon",
  "Independence Blue Cross Broad Street Run",
  "Northside Hospital Peachtree Road Race", "ASICS Falmouth Road Race",
  "Dipsea Race", "Delta Dental Mount Washington Road Race",
  "Western States Endurance Run", "Hardrock Hundred Endurance Run",
  "Leadville Trail 100 Run", "High Lonesome 100", "The San Francisco Marathon",
  "ASICS Los Angeles Marathon", "Oakland Marathon", "Napa Valley Marathon",
  "Golden Gate Half Marathon",
]

const track = document.querySelector(".race-ticker-track")
if (track) {
  for (const race of [...races, ...races]) {
    const item = document.createElement("span")
    item.className = "ticker-item"
    item.innerHTML = `<span>${race}</span><i>↗</i>`
    track.append(item)
  }
}
