locationsOne = [
  "Humber River Hospital, Downsview Arena, <br/> &nbsp;&nbsp;&nbsp;&nbsp;1633 Wilson Ave, <br/>&nbsp;&nbsp;&nbsp;&nbsp;North York, ON M3L 1A5",

  "The Hangar, <br/> &nbsp;&nbsp;&nbsp;&nbsp;75 Carl Hall Rd, <br/>&nbsp;&nbsp;&nbsp;&nbsp;North York, ON M3K 2B9",

  "CW Jefferys Collegiate Institute, <br/> &nbsp;&nbsp;&nbsp;&nbsp;340 Sentinel Rd, <br/>&nbsp;&nbsp;&nbsp;&nbsp;North York, ON M3J 1V2",

  "York University Boulevard parking lot, <br/> &nbsp;&nbsp;&nbsp;&nbsp;4700 Keele Street, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Toronto, ON M3J 1P3",
];

locationsTwo = [
  "Fletcher's Meadow Secondary School, <br/> &nbsp;&nbsp;&nbsp;&nbsp;10750 Chinguacousy Rd, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Brampton, ON L7A 2Z7",

  "Brampton Farmer’s Market, <br/> &nbsp;&nbsp;&nbsp;&nbsp;2 Wellington St W, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Brampton, ON L6Y 1M8",

  "CAA Centre - Sports and Entertainment Complex, <br/> &nbsp;&nbsp;&nbsp;&nbsp;7575 Kennedy Rd S, <br/>&nbsp;&nbsp;&nbsp;&nbsp;Brampton, ON L6W 4T2",
];

function fetchValues() {
  sName = document.getElementById("uservalue").value;
  sDate = document.getElementById("datevalue").value;
  sVaccine = document.getElementById("dropdownMenuButton").innerText;
  sLocation = "";
  sAppTime = "";
  var p = 0;

  var locationElements = document.getElementsByName("flexRadioDefault");

  for (p = 0; p < locationElements.length; p++) {
    if (locationElements[p].checked) {
      sLocation = locationElements[p].previousElementSibling.innerHTML;
    }
  }
  locationElements = document.getElementsByName("flex");
  for (p = 0; p < locationElements.length; p++) {
    if (locationElements[p].checked) {
      sAppTime = locationElements[p].previousElementSibling.innerHTML;
    }
  }
  valueArr = [sName, sVaccine, sDate, sAppTime, sLocation];
  return valueArr;
}

function startUpPage() {
  document.getElementById("pageOne").style.display = "block";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("pageFive").style.display = "none";
}
function one(pcode) {
  document.getElementById("pageOne").style.display = "none";
  populateLocations(pcode);
  document.getElementById("pageTwo").style.display = "block";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("pageFive").style.display = "none";
}

function two() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "block";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("pageFive").style.display = "none";
  if (!document.getElementById("slots").classList.contains("d-none")) {
    document.getElementById("slots").classList.toggle("d-none");
  }
}

function three() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "block";
  document.getElementById("pageFive").style.display = "none";
}

function reloadToFirstPage() {
  window.location.reload();
}

function reloadToSecondPage() {
  var locationElements = document.getElementsByName("flexRadioDefault");
  var checkElement = null;
  for (p = 0; p < locationElements.length; p++) {
    if (locationElements[p].checked) {
      checkElement = locationElements[p];
    }
  }
  one(document.getElementById("postalcode").value.trim()[0]);
  console.log(checkElement);
  console.log(checkElement.id);

  document.getElementById(checkElement.id).checked = true;
}

function reloadToThirdPage() {
  two();
}

function four() {
  arr = fetchValues();
  successContent =
    ' <div     class="     m-5 bg-light border border-dark p-2">      <div class="m-3 text-center">          <p> <h1>Success! ✅</h1></p>  Hi <strong>' +
    arr[0] +
    "</strong>, Your appointment has been booked for <strong>" +
    arr[1] +
    "</strong> Vaccine!  You are scheduled for a COVID-19 Vaccine appointment on:<p><h5>" +
    arr[2] +
    " " +
    arr[3] +
    " 📅</h5></p>                     <p>at</p>                      <p><h5> " +
    arr[4] +
    ' 🏥</h5> </p>                          <br>                        <p> <h4>What\'s Next?</h4></p>             <p>24 hours before your appointment, you will receive an SMS and email asking you to fill out a brief COVID screening questionnaire.</p>                                       <p><h4> What to expect when coming to the Vaccination Centre for your COVID-19 vaccine:</h4> </p>                        </div>               <div class="container">                 <div class="row">                                   <div class="col-md-auto">                     <ul >                         <li>Don’t forget to bring your provincial health card (In Ontario only, if you do not have an OHIP card please bring another form of government-issued identification).</li>                         <li>Wear clothing that is loose enough for the sleeve to roll up easily. </li>                         <li>Wear a mask! </li>                         <li>When you arrive, please let the Pharmacist know or follow in-store instructions </li>                         <li>After receiving your COVID-19 vaccine, you may be asked to remain in the Pharmacy for 15 minutes so the Pharmacist can monitor you for potential reactions.</li>                         <li>For your safety and to help maintain physical distancing, we ask that you arrive no earlier than 10 minutes prior to your appointment. </li>                           </ul>                   </div>                                  </div>               </div>                                                        <p><h2 class="text-center">See you soon! 👋</h2></p> </div>';
  document.getElementById("successpage").innerHTML = successContent;
}

window.addEventListener("load", (event) => {
  startUpPage();
});

function validatePostalCode() {
  regex =
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i;

  var text = document.getElementById("postalcode").value.trim();
  var locationCheck =
    document.getElementById("postalcode").value.trim().toLowerCase()[0] ==
      "m" ||
    document.getElementById("postalcode").value.trim().toLowerCase()[0] == "l";
  if (text.match(regex) && locationCheck) {
    // document.getElementById("postalcode").className = "";
    document.getElementById("loadPageTwo").textContent = "";
    document.getElementById("loadPageTwo").classList.toggle("spinner-border");

    document.getElementById("loadPageTwo").classList.toggle("text-light");
    document.getElementById("postalcode").classList.toggle("is-valid");
    document
      .getElementById("postalcodeconfirmation")
      .classList.toggle("disabled");
    setTimeout(
      function () {
        one(text[0]);
      },

      1000
    );
  } else {
    if (
      !document.getElementById("postalcode").classList.contains("is-invalid")
    ) {
      if (
        document.getElementById("postalcode").classList.contains("is-valid")
      ) {
        document.getElementById("postalcode").classList.toggle("is-valid");
      }
      document.getElementById("postalcode").classList.toggle("is-invalid");
    }

    if (!locationCheck) {
      document.getElementById("validationPostalCodeFeedback").innerText =
        "Please select the postal code of a location near Greater Toronto Area or within Toronto.";
    }
  }
}

function searchSlots() {
  document.getElementById("searchslotid").classList.toggle("disabled");
  regex = /^\d{4}[-]\d{2}[-]\d{2}$/;

  var text = document.getElementById("datevalue").value;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var maxDate = new Date();
  var minDate = new Date();
  maxDate.setFullYear(2023, 11, 31);
  minDate.setFullYear(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
  var userDate = new Date();
  userDate.setFullYear(
    parseInt(document.getElementById("datevalue").value.split("-")[0]),
    parseInt(document.getElementById("datevalue").value.split("-")[1] - 1),
    parseInt(document.getElementById("datevalue").value.split("-")[2])
  );

  if (text.match(regex) && userDate >= minDate && userDate <= maxDate) {
    document.getElementById("loadSearchResults").textContent = "";
    document
      .getElementById("loadSearchResults")
      .classList.toggle("spinner-border");

    document.getElementById("loadSearchResults").classList.toggle("text-light");
    document.getElementById("datevalue").classList.toggle("is-valid");
    setTimeout(
      function () {
        day = parseInt(
          document.getElementById("datevalue").value.split("-")[2]
        );
        if (document.getElementById("slots").classList.contains("d-none")) {
          document.getElementById("slots").classList.toggle("d-none");
        }
        result = [];
        if (day % 2 == 0) {
          result.push("10:00 - 10:10");
        }

        if (day % 3 == 0) {
          result.push("11:20 - 11:30");
        }
        if (day % 5 == 0) {
          result.push("14:10 - 14:20");
        }

        if (day % 7 == 0) {
          result.push("15:40 - 15:50");
        }

        if (day % 11 == 0) {
          result.push("17:30 - 17:40");
        }
        var elementStr = "";
        if (result.length != 0) {
          for (i = 0; i < result.length; i++) {
            var j = i + 1;
            elementStr +=
              ' <div class="form-check"> <label class="form-check-label" for="flex' +
              j +
              '">' +
              result[i] +
              '</label> <input class="form-check-input" type="radio" name="flex" id="flex' +
              j +
              '"/> </div> <br/>';
          }

          document.getElementById("timeslots").innerHTML = elementStr;
          document.getElementById("slotconfirmation").style.display = "block";
          var ele = document.getElementById("flex1");
          if (typeof ele != "undefined" && ele != null) {
            document.getElementById("flex1").checked = true;
          }
        } else {
          //document.getElementById("slots").classList.toggle("d-none");
          document.getElementById("timeslots").innerHTML =
            '<div class="alert alert-warning" role="alert"> <p>No time slot/s available for the selected date, please choose another date.</p></div>';
          document.getElementById("slotconfirmation").style.display = "none";
        }
        document.getElementById("loadSearchResults").textContent = "Search";
        document
          .getElementById("loadSearchResults")
          .classList.toggle("spinner-border");
        document
          .getElementById("loadSearchResults")
          .classList.toggle("text-light");

        document.getElementById("searchslotid").classList.toggle("disabled");
        // document.getElementById("postalcode").classList.toggle("is-valid");
      },

      1000
    );
  } else {
    showError("datevalue");
    document.getElementById("searchslotid").classList.toggle("disabled");
  }
}

function populateLocations(pcode) {
  var strLocation = "";
  var m = 0;
  var k = 0;

  if (pcode.toLowerCase() == "m") {
    for (m = 0; m < locationsOne.length; m++) {
      k = m + 1;
      strLocation +=
        '<div class="form-check"> <label class="form-check-label" for="flexLocation' +
        k +
        '">' +
        locationsOne[m] +
        '</label>  <input   class="form-check-input"   type="radio"   name="flexRadioDefault"   id="flexLocation' +
        k +
        '" >  </div> <br/>';
    }
    document.getElementById("locationID").innerHTML = strLocation;
  } else {
    for (m = 0; m < locationsTwo.length; m++) {
      k = m + 1;
      strLocation +=
        '<div class="form-check"> <label class="form-check-label" for="flexLocation' +
        k +
        '"> ' +
        locationsTwo[m] +
        ' </label>  <input   class="form-check-input"   type="radio"   name="flexRadioDefault"   id="flexLocation' +
        k +
        '" >  </div> <br/>';
    }
    document.getElementById("locationID").innerHTML = strLocation;
  }
  document.getElementById("flexLocation1").checked = true;
}

function removeErrorMsg(idValue) {
  if (idValue == "agree") {
    document.getElementById(idValue).className = "form-check-input";
  } else {
    document.getElementById(idValue).className = "form-control";
  }
}

function dropdownMenuButton(vaccinename) {
  document.getElementById("dropdownMenuButton").innerText = vaccinename;
}

function validateUserdata() {
  document.getElementById("finalsubmit").classList.toggle("disabled");
  document.getElementById("submitspinner").textContent = "";
  document.getElementById("submitspinner").classList.toggle("spinner-border");
  document.getElementById("submitspinner").classList.toggle("text-light");

  var username = document.getElementById("uservalue").value;
  var useremailAdd = document.getElementById("emailvalue").value;
  var userphoneNum = document.getElementById("phonevalue").value;
  var userconsent = document.getElementById("agree").checked;
  var runNextPage = 0;
  if (username.trim() == "") {
    console.log("user name not entered");
    showError("uservalue");
  } else {
    runNextPage++;
  }

  //email validation
  if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(useremailAdd)) {
    showError("emailvalue");
  } else {
    runNextPage++;
  }

  //phone validation
  if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      userphoneNum
    )
  ) {
    showError("phonevalue");
  } else {
    runNextPage++;
  }
  if (!userconsent) {
    showError("agree");
  } else {
    runNextPage++;
  }

  if (runNextPage == 4) {
    setTimeout(
      function () {
        document.getElementById("pageOne").style.display = "none";
        document.getElementById("pageTwo").style.display = "none";
        document.getElementById("pageThree").style.display = "none";
        document.getElementById("pageFour").style.display = "none";
        document.getElementById("pageFive").style.display = "block";
        four();
      },

      1000
    );
  } else {
    document.getElementById("submitspinner").textContent = "Submit";
    document.getElementById("submitspinner").classList.toggle("spinner-border");
    document.getElementById("submitspinner").classList.toggle("text-light");
    document.getElementById("finalsubmit").classList.toggle("disabled");
  }
}

function showError(idName) {
  if (!document.getElementById(idName).classList.contains("is-invalid")) {
    if (document.getElementById(idName).classList.contains("is-valid")) {
      document.getElementById(idName).classList.toggle("is-valid");
    }
    document.getElementById(idName).classList.toggle("is-invalid");
  }
}
