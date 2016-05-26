document.addEventListener("DOMContentLoaded", function() {

function idLinkcreator(ElementList) {
  "use strict";
  let x = ElementList || {};
  let b = document.createTextNode("\u00A0"); //unicode char for white space
  
  function linkCreator(link) {
	  let a = document.createElement("A");
    a.text = link.text || "#";
    a.href = link.href || "#";
    a.target = link.target || "_blank";
    a.className = link.classname || "";
    a.id = link.id || "";
    return a;
  }

  try {
    for(let i of x) {
      let s = {text:"\u26a1", href:"#"+i.id, target:"_self", classname:"sharing_links"};
      i.appendChild(b);
      i.appendChild(linkCreator(s));
    }
  } catch(err){
  	/*This block for clients which not yet supports `for of` iterator*/
    for(let n = 0, xl = x.length; n < xl; n++) {
      let i = x[n];
      let s = {text:"\u26a1", href:"#"+x[n].id, target:"_self", classname:"sharing_links"};
      i.appendChild(b);
      i.appendChild(linkCreator(s));
    }
  }
};

idLinkcreator(document.querySelectorAll("li"));

});
