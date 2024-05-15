const listAnchor = document.querySelectorAll(".container li a");
const modal = document.getElementById("modal");
const btnModalClose = modal.querySelector(".btn-modal-close");
const modalContents = modal.querySelector(".contents");

const mockupContainer = modal.querySelector(".mockup");
const mockupPcImgArea = modal.querySelector(".mockup .pc .area-img");
const mockupMobileImgArea = modal.querySelector(".mockup .mob .area-img");
const mockupPcImg = modal.querySelector(".mockup .pc .area-img img");
const mockupMobileImg = modal.querySelector(".mockup .mob .area-img img");

listAnchor &&
  listAnchor.forEach((el) => {
    el.addEventListener("click", () => {
      switchContent(el);
      document.body.style.overflow = "hidden";
      modal.classList.add("on");
      btnModalClose.classList.add("on");
    });
  });

btnModalClose &&
  btnModalClose.addEventListener("click", () => {
    modalHandler();
  });

document.addEventListener("mousedown", function (e) {
  // mouse 3rd button event
  if (modal.classList.contains("on") && e.button === 3) {
    btnModalClose.classList.remove("on");
    modal.scrollTo({ top: 0 });
    mockupPcImgArea.scrollTo({ top: 0 });
    mockupMobileImgArea.scrollTo({ top: 0 });
    modal.classList.remove("on");
    document.body.style.overflow = "auto";
  }
});

function modalHandler() {
  const locationHash = window.location.hash;

  if (modal.classList.contains("on") && locationHash) {
    btnModalClose.classList.remove("on");
    modal.scrollTo({ top: 0 });
    mockupPcImgArea.scrollTo({ top: 0 });
    mockupMobileImgArea.scrollTo({ top: 0 });
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
      modalContents.innerHTML = `
            <img src="./src/img/contents/specialPoint.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/specialPoint.webm" type="video/webm" />
            </video>
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_specialPoint.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_specialPoint_mob.jpg"
      );
      break;

    case "#specialPoint2":
      console.log("specialPoint2");
      modalContents.innerHTML = `
            <img src="./src/img/contents/specialPoint2.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_specialPoint2.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_specialPoint2_mob.jpg"
      );
      break;

    case "#overseasBranding":
      console.log("overseasBranding");
      modalContents.innerHTML = `
              <img src="./src/img/contents/overseas_branding.jpg" alt="">
        `;
      mockupContainer.style.display = "flex";
      mockupContainer.style.display = "none";
      break;

    case "#china1212":
      console.log("china1212");
      modalContents.innerHTML = `
            <img src="./src/img/contents/china1212.jpg" alt="">
            <div class="mockup_china1212" style="width:100%;height:fit-content;display:flex;justify-content:center;padding:10vh 0;background-color:#fff">
              <div class="pc" style="width:75vw;height:auto;max-height:756;border-radius:16px;overflow:hidden;border:1px solid #d5d5d5;">
                  <div class="title-bar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="8" viewBox="0 0 34 8">
                          <g id="btn" transform="translate(-261 -8389)">
                              <circle id="타원_8439" data-name="타원 8439" cx="4" cy="4" r="4"
                                  transform="translate(261 8389)" fill="#ec6a5e" />
                              <circle id="타원_8440" data-name="타원 8440" cx="4" cy="4" r="4"
                                  transform="translate(274 8389)" fill="#f6bf51" />
                              <circle id="타원_8441" data-name="타원 8441" cx="4" cy="4" r="4"
                                  transform="translate(287 8389)" fill="#60c452" />
                          </g>
                      </svg>
                  </div>
                  <div class="area-img">
                    <video id="vodTitle" autoplay muted playsinline loop>
                        <source src="./src/vod/contents/china1212.webm" type="video/webm" />
                    </video>
                  </div>
              </div>
            </div>
      `;
      mockupContainer.style.display = "none";
      break;
    case "#weddingFair":
      console.log("weddingFair");
      modalContents.innerHTML = `
          <img src="./src/img/contents/weddingFair.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_weddingFair.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_weddingFair_mob.jpg"
      );
      break;
    case "#kTrend":
      console.log("kTrend");
      modalContents.innerHTML = `
            <img src="./src/img/contents/kTrend.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_kTrend.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_kTrend_mob.jpg"
      );
      break;
    case "#samgyetang":
      console.log("samgyetang");
      modalContents.innerHTML = `
            <img src="./src/img/contents/samgyetang.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_samgyetang.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_samgyetang_mob.jpg"
      );
      break;
    case "#valentine":
      console.log("valentine");
      modalContents.innerHTML = `
      <img src="./src/img/contents/valentine.jpg" alt="">
      <video id="vodTitle" autoplay muted playsinline loop>
          <source src="./src/vod/contents/valentine.webm" type="video/webm" />
      </video>
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_valentine.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_valentine_mob.jpg"
      );
      break;
    case "#blackFriday":
      console.log("blackFriday");
      modalContents.innerHTML = `
            <img src="./src/img/contents/blackFriday_1.jpg" alt="">
            <div class="wrap_vod" style="position:relative">
              <video id="vodTitle" style="width:29%;height:auto;position:absolute;left:47.5%;top:136px;border-radius:55px;border:8px solid #fff;transform:translateX(-50%);" autoplay muted playsinline loop>
              <source src="./src/vod/contents/blackFriday.webm" type="video/webm" />
              </video>
              <img src="./src/img/contents/blackFriday_2.jpg" alt="">
            </div>
      `;
      mockupContainer.style.display = "none";
      break;
    case "#blackFriday2":
      console.log("blackFriday2");
      modalContents.innerHTML = `
            <img src="./src/img/contents/blackFriday2_1.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/blackFriday2.webm" type="video/webm" />
            </video>
            <img src="./src/img/contents/blackFriday2_2.jpg" alt="">
      `;
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_blackFriday2.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_blackFriday2_mob.jpg"
      );
      break;
    case "#courtAndCart":
      console.log("courtAndCart");
      modalContents.innerHTML = `
            <img src="./src/img/contents/courtAndCart.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_courtAndCart.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_courtAndCart_mob.jpg"
      );
      break;
    case "#kolonSale":
      console.log("kolonSale");
      modalContents.innerHTML = `
            <img src="./src/img/contents/kolonBrand_sale.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_kolonBrand_sale.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_kolonBrand_sale_mob.jpg"
      );
      break;
    case "#coupleItem":
      console.log("coupleItem");
      modalContents.innerHTML = `
            <img src="./src/img/contents/coupleItem.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_coupleItem.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_coupleItem_mob.jpg"
      );
      break;
    case "#china1111":
      console.log("china1111");
      modalContents.innerHTML = `
            <img src="./src/img/contents/china1111.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_china1111.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_china1111_mob.jpg"
      );
      break;
    case "#cozyScent":
      console.log("cozyScent");
      modalContents.innerHTML = `
            <img src="./src/img/contents/cozyScent.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_cozyScent.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_cozyScent_mob.jpg"
      );
      break;
    case "#adultLifeStyle":
      console.log("adultLifeStyle");
      modalContents.innerHTML = `
            <img src="./src/img/contents/adultLifeStyle.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_adultLifeStyle.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_adultLifeStyle_mob.jpg"
      );
      break;
    case "#beautyDevice":
      console.log("beautyDevice");
      modalContents.innerHTML = `
            <img src="./src/img/contents/beautyDevice.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_beautyDevice.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_beautyDevice_mob.jpg"
      );
      break;
    case "#megaBenefit":
      console.log("megaBenefit");
      modalContents.innerHTML = `
            <img src="./src/img/contents/megaBenefit_1.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/megaBenefit.webm" type="video/webm" />
            </video>
            <img src="./src/img/contents/megaBenefit_2.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_megaBenefit.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_megaBenefit_mob.jpg"
      );
      break;
    case "#newYear2023":
      console.log("newYear2023");
      modalContents.innerHTML = `
            <img src="./src/img/contents/newYear2023.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/newYear2023.webm" type="video/webm" />
            </video>
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_newYear2023.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_newYear2023_mob.jpg"
      );
      break;
    case "#hanaTravelog":
      console.log("hanatravelog");
      modalContents.innerHTML = `
            <img src="./src/img/contents/hanaTravelog.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/hanaTravelog.webm" type="video/webm" />
            </video>
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_hanaTravelog.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_hanaTravelog_mob.jpg"
      );
      break;
    case "#ktMembership":
      console.log("ktMembership");
      modalContents.innerHTML = `
            <img src="./src/img/contents/ktMembership.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/ktMembership.webm" type="video/webm" />
            </video>
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_ktMembership.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_ktMembership_mob.jpg"
      );
      break;
    case "#wooriExchange":
      console.log("wooriExchange");
      modalContents.innerHTML = `
            <img src="./src/img/contents/wooriExchange.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_wooriExchange.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_wooriExchange_mob.jpg"
      );
      break;
    case "#overseas":
      console.log("overseas");
      modalContents.innerHTML = `
            <img src="./src/img/contents/overseas_1.jpg" alt="">
            <video id="vodTitle" autoplay muted playsinline loop>
                <source src="./src/vod/contents/overseas.webm" type="video/webm" />
            </video>
            <img src="./src/img/contents/overseas_2.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute("src", "./src/img/mockup/mockup_overseas.jpg");
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_overseas_mob.jpg"
      );
      break;
    case "#dosirakWifi":
      console.log("dosirakWifi");
      modalContents.innerHTML = `
            <img src="./src/img/contents/dosirakWifi.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_dosirakWifi.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_dosirakWifi_mob.jpg"
      );
      break;
    case "#5dollarItems":
      console.log("5dollarItems");
      modalContents.innerHTML = `
            <img src="./src/img/contents/5dollarItems.jpg" alt="">
      `;
      mockupContainer.style.display = "flex";
      mockupPcImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_5dollarItems.jpg"
      );
      mockupMobileImg.setAttribute(
        "src",
        "./src/img/mockup/mockup_5dollarItems_mob.jpg"
      );
      break;
  }
}
