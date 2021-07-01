/*
For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
PART 1
1. Createafunction'createImage'whichreceives'imgPath'asaninput. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
2. Whentheimageisdoneloading,appendittotheDOMelementwiththe 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
3. Ifthispartistootrickyforyou,justwatchthefirstpartofthesolution
PART 2
4. Consumethepromiseusing.thenandalsoaddanerrorhandler
5. Aftertheimagehasloaded,pauseexecutionfor2secondsusingthe'wait'
function we created earlier
6. Afterthe2secondshavepassed,hidethecurrentimage(setdisplayCSS
property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
7. Afterthesecondimagehasloaded,pauseexecutionfor2secondsagain
8. Afterthe2secondshavepassed,hidethecurrentimage
Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast
*/

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const imgContainer = document.querySelector(".images");

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

let currImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currImg = img;
    console.log("Image 1 is loaded.");
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currImg = img;
    console.log("Image 2 is loaded.");
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
  })
  .catch((err) => console.error(err));
