(function () {
  let divResourceLinks = document.getElementById("divResourceLinks");
  let resourceLinksContainer = divResourceLinks.children[0];
  let firstRow = resourceLinksContainer.children[0];
  firstRow.classList.add("mb-4");
  firstRow.children[0].classList.add("col-lg-6");
  firstRow.children[1].classList.add("col-lg-6");
  let thirdDiv = firstRow.removeChild(firstRow.children[2]);
  let forthDiv = firstRow.removeChild(firstRow.children[2]);
  thirdDiv.classList.add("col-lg-6");
  forthDiv.classList.add("col-lg-6");
  let newRow = document.createElement("div");
  newRow.className = "row";
  newRow.appendChild(thirdDiv);
  newRow.appendChild(forthDiv);

  let rowWrapper = document.createElement("div");
  rowWrapper.className = "row";
  let columnWrapper = document.createElement("div");
  columnWrapper.className = "col-lg-6";

  columnWrapper.appendChild(firstRow);
  columnWrapper.appendChild(newRow);

  rowWrapper.appendChild(columnWrapper);

  // for rightside container
  let divEnterpriseProductLinks = document.getElementById(
    "divEnterpriseProductLinks"
  );
  let enterpriseProductLinksContainer = divEnterpriseProductLinks.children[0];
  let currentFirstRow = enterpriseProductLinksContainer.children[1];

  let columnDiv = currentFirstRow.children[0];
  let columnDiv2 = currentFirstRow.children[1];
  columnDiv.classList.add("col-lg-12");
  columnDiv2.classList.add("col-lg-12");

  let enterPriseRowWrapper = document.createElement("div");
  enterPriseRowWrapper.className = "row";

  enterPriseRowWrapper.appendChild(columnDiv);
  enterPriseRowWrapper.appendChild(columnDiv2);

  columnWrapper = document.createElement("div");
  columnWrapper.className = "col-lg-6";
  columnWrapper.appendChild(enterPriseRowWrapper);
  rowWrapper.appendChild(columnWrapper);

  resourceLinksContainer.appendChild(rowWrapper);

  // remove the divEnterpriseProductLinks
  divEnterpriseProductLinks.parentNode.removeChild(divEnterpriseProductLinks);
})();
