// const API_URL="http://localhost:8000/api/";
const API_URL = "https://dacxi.api.turknz.co.nz/api/";
const IMAGE_URL = "https://dacxiglobal.s3.ap-southeast-2.amazonaws.com/";
const EMAIL_VALIDATION_URL = "https://emailvalidation.abstractapi.com/v1/";
const EMAIL_VALIDATION_API_KEY = "e6786177005f416ca89bcd31b53e588f";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// Back To Top
$(document).ready(function () {
  const backToTopBtn = document.querySelector("#backToTop");
  const deskNav = document.querySelector(".nav-desktop");
  const breadcrumbNav = document.querySelector(".navigation");

  window.addEventListener("wheel", (event) => {
    let topSectionEdge = document.querySelector(".top-section").getBoundingClientRect().top;
    if (topSectionEdge < 0) {
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.visibility = "hidden";
    }
  });

  window.addEventListener("wheel", (event) => {
    let topSectionEdge = document.querySelector(".top-section").getBoundingClientRect().top;
    // console.log(topSectionEdge);

    if (topSectionEdge > -400) {
      deskNav.classList.remove("moveToTop");
      breadcrumbNav && breadcrumbNav.classList.remove("moveToTop");
    } else {
      deskNav.classList.add("moveToTop");
      breadcrumbNav && breadcrumbNav.classList.add("moveToTop");
    }

    if (topSectionEdge < 0) {
      deskNav.classList.remove("bgc-nav");
      deskNav.classList.add("bgc-black");
    } else {
      deskNav.classList.add("bgc-nav");
      deskNav.classList.remove("bgc-black");
    }

    if (event.deltaY < 0) {
      // console.log("up");
      deskNav.classList.remove("moveToTop");
      breadcrumbNav && breadcrumbNav.classList.remove("moveToTop");
    } else {
      // console.log("down");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    let topSection = document.querySelector(".top-section");
    topSection.scrollIntoView();
    deskNav.classList.remove("moveToTop");
    breadcrumbNav && breadcrumbNav.classList.remove("moveToTop");
  });
});

// Validate Name
function validateName(name) {
  let regName = /^[a-zA-Z ]{3,30}$/;
  if (!regName.test(name)) {
    return false;
  } else {
    return true;
  }
}

// Validate Email
function validateEmail(email) {
  let regEmail = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  if (!regEmail.test(email)) {
    return false;
  } else {
    return true;
  }
}

// Validate Message
function validateMessage(msg) {
  let regMessage = /\S{3}/;
  if (!regMessage.test(msg)) {
    return false;
  } else {
    return true;
  }
}

// Validate Phone
function validatePhone(phone) {
  let regName = /^[0-9]{8,12}$/;
  if (!regName.test(phone)) {
    return false;
  } else {
    return true;
  }
}

let COUNTRY = "Global";
// Check if url contains au or uk
$(document).ready(function () {
  if (window.location.href.indexOf("au") > -1) {
    COUNTRY = "AU";
  }
  if (window.location.href.indexOf("uk") > -1) {
    COUNTRY = "UK";
  }
  // console.log(COUNTRY);
});

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-114134533-1");

// Calendly Config
let WIDGET = "https://calendly.com/christyson-dacxiaunz";
$(document).ready(function () {
  if (window.location.href.indexOf("uk") > -1) {
    WIDGET = "https://calendly.com/jay-503/15min";
    runCalendly()
  } else if (window.location.href.indexOf("au") > -1) {
  } else {
    runCalendly()
  }
});

function runCalendly() {
  window.onload = function () {
    Calendly.initBadgeWidget({
      url: WIDGET,
      text: "Schedule a call",
      color: "#ffffff",
      textColor: "#aa69ff",
      branding: true,
    });
  };
}
