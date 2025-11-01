const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function getMyLocation() {
  navigator.geolocation.getCurrentPosition(
    (locationData) => {
      console.log("Getting your location...");
      setTimer(1000)
        .then((data) => {
          // this get the parameter from the resolve function above
          console.log(data);
        })
        .then(() => {
          // this is getting the location data recived from the geolocation function
          console.log(locationData);
        });
    },
    () => {
      console.log("Error getting the location");
    }
  );
}

getMyLocation();
