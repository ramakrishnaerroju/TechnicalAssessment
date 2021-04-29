(function () {
  let menuItemNodes = document.querySelectorAll(".anavmfe__accordion__item");
  let processorNode = menuItemNodes[2].parentNode.removeChild(menuItemNodes[2]);
  let firstNode = menuItemNodes[0];
  firstNode.parentNode.insertBefore(processorNode, firstNode);
})();
