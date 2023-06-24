// Array for mp3 samples, items are object having file source and name
const samples = [];

samples.push({
  Username: "Webmaster",
  Email: "example@email.com",
  Address: "Demoland 123",
  Admin: "X"
});
samples.push({
  Username: "User123",
  Email: "example@email.com",
  Address: "Userplace 321",
  Admin: "-"
});
samples.push({
  Username: "AnotherUser222",
  Email: "example@email.com",
  Address: "Userplace 321",
  Admin: "-"
});

// 2D array of tracks – so one track can have multiple samples in a row
let tracks = [];
tracks.push([]);
tracks.push([]);
tracks.push([]);

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitButton = document.getElementById("submit-data");
  const clearButton = document.getElementById("empty-table");

  submitButton.addEventListener("click", function () {
    var username = document.getElementById("input-username").value;
    var email = document.getElementById("input-email").value;
    var address = document.getElementById("input-address").value;
    var admin = document.getElementById("input-admin").value;
    samples.push({
      Username: username,
      Email: email,
      Address: address,
      Admin: admin
    });
    tracks.push([]);
    samples.forEach((sample) => {
      console.log(sample.Username);
    });
  });

  clearButton.addEventListener("click", function () {
    document.getElementById("table").innerHTML = "";
  });
}
