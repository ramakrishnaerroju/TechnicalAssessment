(function () {
  //alter images
  const cameraNode = document.querySelector(
    "img[alt='Cameras, Photo & Video']"
  );
  let containerNode = cameraNode.closest(".half-hero");
  let cameraNodesList = containerNode.children[1].children;
  let cameraImages = [];
  for (let i = 0; i < cameraNodesList.length; i++) {
    cameraImages.push(cameraNodesList[i].querySelector("img").src);
  }

  const networkingNode = document.querySelector("img[alt='Networking']");
  containerNode = networkingNode.closest(".half-hero");
  let networkingNodeList = containerNode.children[1].children;
  for (let i = 0; i < networkingNodeList.length; i++) {
    networkingNodeList[i].querySelector("img").src = cameraImages[i];
  }

  // alter bg color to purple
  networkingNode.parentNode.style.background = "purple";

  // calculate sum of prices
  (function () {
    const powerNode = document.querySelector(
      "img[alt='Power, Batteries & Adapters']"
    );
    containerNode = powerNode.closest(".half-hero");
    let targetNodes = containerNode.children[1].children;

    let priceList = [];
    for (let i = 0; i < targetNodes.length; i++) {
      let priceString = targetNodes[i].querySelector(".half-hero-pricing")
        .textContent;
      let price = priceString.replace(/^\D+/g, "").trim();
      priceList.push(parseFloat(price));
    }
    let total = priceList.reduce((sum, currentValue) => (sum += currentValue));
    alert("Total Sum $" + total);
  })();
})();
