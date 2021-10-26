
 let currentNode;

 function addNewParagraph() {

    // TO BE COMPLETED

 }

 function domView() {
    let i;
    let nodeList;
    let output = "";

    //<p> elements
    nodeList = document.getElementsByTagName("p");

    // TO BE COMPLETED

    currentNode = document.getElementById("domview");
    currentNode.innerHTML = output;
    currentNode.style.visibility = "visible";
 }

 function domHide() {
    currentNode = document.getElementById("domview");
    currentNode.style.visibility = "hidden";
 }

 window.onload = function() {
    document.getElementById("listdom").onclick = domView;
    document.getElementById("hidedom").onclick = domHide;
    document.getElementById("addpara").onclick = addNewParagraph;
    document.getElementById("altercell").onclick = alterCell;
  };