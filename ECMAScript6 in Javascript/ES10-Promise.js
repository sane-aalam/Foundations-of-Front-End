let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve("Success! Random number: " + randomNum);
    } else {
      reject("Error! Random number: " + randomNum);
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// setTimeout(() => {
//   console.log("Hello printing!");
// }, 1000);
