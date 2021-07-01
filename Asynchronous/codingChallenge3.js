"use strict";

/*
Your tasks:
PART 1
1. Writeanasyncfunction'loadNPause'thatrecreatesChallenge#2,thistime using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
2. Comparethetwoversions,thinkaboutthebigdifferences,andseewhichone you like more
3. Don'tforgettotesttheerrorhandler,andtosetthenetworkspeedto“Fast3G” in the dev tools Network tab
PART 2
1. Createanasyncfunction'loadAll'thatreceivesanarrayofimagepaths 'imgArr'
2. Use.maptoloopoverthearray,toloadalltheimageswiththe 'createImage' function (call the resulting array 'imgs')
3. Checkoutthe'imgs'arrayintheconsole!Isitlikeyouexpected?
4. Useapromisecombinatorfunctiontoactuallygettheimagesfromthearray😉
5. Addthe'parallel'classtoalltheimages(ithassomeCSSstyles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function
*/

const imgContainer = document.querySelector(".images");

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found."));
    });
  });
};

// Part 1
const loadNPause = async function (imgPath) {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 is loaded.");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Image 2 is loaded.");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-3.jpg");
    console.log("Image 3 is loaded.");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

//loadNPause();

// Part 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.Error(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
