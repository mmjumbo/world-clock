function updateTime() {
  //LA Time
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Melbourne Time
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  melbourneTime = moment().tz("Australia/Melbourne");
  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "here") {
    cityTimeZone = moment.tz.guess ();
  }
  let cityName = cityTimeZone.split("/")[1];
  cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small> </div>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
