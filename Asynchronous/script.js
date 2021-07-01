"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  let html = "";
  data.forEach((d) => {
    html += `
    <article class="country ${className}">
        <img class="country__img" src="${d.flag}" />
        <div class="country__data">
            <h3 class="country__name">${d.name}</h3>
            <h4 class="country__region">${d.region}</h4>
            <p class="country__row"><span>👫</span>${d.population} people</p>
            <p class="country__row"><span>🗣️</span>${d.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${d.currencies[0].name}</p>
        </div>
    </article>
  `;
  });

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     renderCountry(data);

//     data.forEach((d) => {
//       const [neighbour] = d.borders;

//       if (!neighbour) return;

//       const request2 = new XMLHttpRequest();
//       request2.open(
//         "GET",
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//       );
//       request2.send();

//       request2.addEventListener("load", function () {
//         const data2 = JSON.parse(this.responseText);

//         renderCountry([data2], "neighbour");
//       });
//     });
//   });
// };

//getCountry("USA");

//const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data);

//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry([data], "neighbour"))
//     .catch((err) => alert(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJSON = function (url, errMsg = "Something went wrong.") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     "Country Not Found."
//   )
//     .then((data) => {
//       renderCountry(data);

//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error("No neighbour found.");

//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         "Country Not Found."
//       );
//     })
//     .then((data) => renderCountry([data], "neighbour"))
//     .catch((err) => alert(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("Australia");
// });

//
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding : ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data))
//     .catch((err) => console.error(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// const get3Countrys = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);

//     console.log(data.map((d) => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countrys("usa", "canada", "new zealand");

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/nepal`),
    getJSON(`https://restcountries.eu/rest/v2/name/usa`),
    getJSON(`https://restcountries.eu/rest/v2/name/canada`),
  ]);

  console.log(res[0]);
})();

//Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another Success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Promise.any
Promise.any([
  Promise.reject("ERROR"),
  Promise.reject("ERROR"),
  Promise.reject("ERROR"),
  Promise.resolve("Success"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
