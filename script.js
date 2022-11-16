let data;
var dataa;
$(function () {
  $.get("https://randomuser.me/api/", function (data) {
    data = data.results[0];
    dataa = data;
    console.log(data.location);
    display(
      `${data.picture.large}`,
      "My name is",
      `${data.name.first} ${data.name.last} `
    );
  });
});

function display(pic, desc, data) {
  $("#user").html("");
  var text = `
          <img
            src="${pic}"
            class="rounded-circle mt-3"
            style="
              width: 140px;
              height: 140px;
              border: 5px solid white;
              outline: 1px solid grey;
            "
          />
          <h5 class="text-muted fw-light mt-4">${desc}</h4>
          <h1 id="h1" class="text-black fw-normal text-capitalize">${data}</h1>
          <div class="mt-4">
            <i id="userr" class="fa-regular fa-user fa-2xl text-primary mx-3" onclick="user()"></i>
            <i id="envelope" class="fa-regular fa-envelope fa-2xl text-secondary mx-3" onclick="envelope()"></i>
            <i id="calendar" class="fa-regular fa-calendar fa-2xl text-secondary mx-3" onclick="calendar()"></i>
            <i id="map" class="fa-regular fa-map fa-2xl text-secondary mx-3" onclick="map()"></i>
            <i id="phone" class="fa-solid fa-phone fa-2xl text-secondary mx-3" onclick="phone()"></i>
            <i id="lock" class="fa-solid fa-user-lock fa-2xl text-secondary mx-3" onclick="lock()"></i>
          </div>
        <button class="btn btn-info text-light mt-4" onclick="randomm()">Random User</button>
      `;

  $("#user").html(text);
}
function user() {
  display(
    `${dataa.picture.large}`,
    "My name is",
    `${dataa.name.first} ${dataa.name.last} `
  );
  $("#envelope,#calendar,#map,#phone,#lock")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#userr").removeClass("text-secondary").addClass("text-primary");
  $("#h1")
    .removeClass("text-capitalize text-lowercase")
    .addClass("text-capitalize");
}

function envelope() {
  display(`${dataa.picture.large}`, "My email is", `${dataa.email}`);
  $("#userr,#calendar,#map,#phone,#lock")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#envelope").removeClass("text-secondary").addClass("text-primary");
  $("#h1")
    .removeClass("text-capitalize text-lowercase")
    .addClass("text-lowercase");
}

function calendar() {
  display(`${dataa.picture.large}`, "My age is", `${dataa.dob.age} `);
  $("#userr,#envelope,#map,#phone,#lock")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#calendar").removeClass("text-secondary").addClass("text-primary");
}

function map() {
  display(
    `${dataa.picture.large}`,
    "My street is",
    `${dataa.location.street.number} ${dataa.location.street.name} `
  );
  $("#userr,#envelope,#calendar,#phone,#lock")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#map").removeClass("text-secondary").addClass("text-primary");
  $("#h1")
    .removeClass("text-capitalize text-lowercase")
    .addClass("text-capitalize");
}

function phone() {
  display(`${dataa.picture.large}`, "My phone is", `${dataa.cell} `);
  $("#userr,#envelope,#calendar,#map,#lock")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#phone").removeClass("text-secondary").addClass("text-primary");
}

function lock() {
  display(
    `${dataa.picture.large}`,
    "My password is",
    `${dataa.login.password}`
  );
  $("#userr,#envelope,#calendar,#map,#phone")
    .removeClass("text-primary")
    .addClass("text-secondary");
  $("#lock").removeClass("text-secondary").addClass("text-primary");
  $("#h1")
    .removeClass("text-capitalize text-lowercase")
    .addClass("text-lowercase");
}

function randomm() {
  $.get("https://randomuser.me/api/", function (data) {
    data = data.results[0];
    dataa = data;
    console.log(data.location);
    display(
      `${data.picture.large}`,
      "My name is",
      `${data.name.first} ${data.name.last} `
    );
  });
}
