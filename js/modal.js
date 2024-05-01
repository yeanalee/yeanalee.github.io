const contentsAnchor = document.querySelectorAll(".contents li a");
const modal = document.getElementById("modal");
const modalDescription = modal.querySelector(".description img");
const modalApplication = modal.querySelector(".application img");
const btnModalClose = modal.querySelector(".btn_modal_close");

contentsAnchor &&
  contentsAnchor.forEach((el) => {
    el.addEventListener("click", () => {
      switchContent(el);
      document.body.style.overflow = "hidden";
      modal.classList.add("on");
    });
  });

btnModalClose &&
  btnModalClose.addEventListener("click", () => {
    modalHandler();
  });

document.addEventListener("mousedown", function (e) {
  // mouse 3rd button event
  if (modal.classList.contains("on") && e.button === 3) {
    modal.classList.remove("on");
    document.body.style.overflow = "auto";
  }
});

function modalHandler() {
  const locationHash = window.location.hash;

  if (modal.classList.contains("on") && locationHash) {
    modal.classList.remove("on");
    document.body.style.overflow = "auto";
    window.history.pushState("", document.title, window.location.pathname);
  }
}

function checkHash() {
  if (!locationHash) {
    return false;
  } else {
    return true;
  }
}

function switchContent(el) {
  let thumbHref = el.getAttribute("href");

  switch (thumbHref) {
    case "#specialPoint":
      console.log("specialPoint");
      break;
    case "#specialPoint2":
      console.log("specialPoint2");
      break;
    case "#china1212":
      console.log("china1212");
      break;
    case "#weddingFair":
      console.log("weddingFair");
      break;
    case "#kTrend":
      console.log("kTrend");
      break;
    case "#samgyetang":
      console.log("samgyetang");
      break;
    case "#valentine":
      console.log("valentine");
      break;
    case "#blackFriday":
      console.log("blackFridady");
      break;
    case "#blackFriday2":
      console.log("blackFriday2");
      break;
    case "#courtAndCart":
      console.log("courtAndCart");
      break;
    case "#kolonSale":
      console.log("kolonSale");
      break;
    case "#coupleItem":
      console.log("coupleItem");
      break;
    case "#china1111":
      console.log("china1111");
      break;
    case "#cozyScent":
      console.log("cozyScent");
      break;
    case "#adultLifeStyle":
      console.log("adultLifeStyle");
      break;
    case "#beautyDevice":
      console.log("beautyDevice");
      break;
    case "#megaBenefit":
      console.log("megaBenefit");
      break;
    case "#newYear2023":
      console.log("newYear2023");
      break;
    case "#hanaTravelog":
      console.log("hanatravelog");
      break;
    case "#ktMembership":
      console.log("ktMembership");
      break;
    case "#wooriExchange":
      console.log("wooriExchange");
      break;
    case "#overshipping":
      console.log("overshipping");
      break;
    case "#dosirakWifi":
      console.log("dosirakWifi");
      break;
    case "#5dollarItems":
      console.log("5dollarItems");
      break;
  }
}
