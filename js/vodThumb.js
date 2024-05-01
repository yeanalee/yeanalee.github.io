function listVodHandler() {
  const listVod = document.querySelectorAll("li.vod");

  listVod &&
    listVod.forEach((e) => {
      e.addEventListener("mouseover", function () {
        e.classList.add("hover");
        e.querySelector("video").play();
      });
      e.addEventListener("mouseleave", function () {
        e.classList.remove("hover");
        e.querySelector("video").pause();
        e.querySelector("video").currentTime = 0;
      });
    });
}
listVodHandler();

const vodTitle = document.getElementById("vodTitle");
vodTitle.addEventListener("ended", vodTitleHandler, false);
function vodTitleHandler(e) {
  setTimeout(function () {
    vodTitle.play();
  }, 2200);
}
