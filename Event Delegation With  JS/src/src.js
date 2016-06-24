document.addEventListener("DOMContentLoaded", function() {
  "use strict";

  let Click_Event_Handler = function (event) {

    let t = event.target;

    this.style.backgroundColor = "#efefef";
    
    if (t.hasAttribute("data-url") && t.nodeName == "P") {
	    t.className = "cActivePara";
      location.href=t.getAttribute("data-url");
    } else if (t.nodeName=="LI"){
        t.className = "cActivelist";        
        t.innerHTML = "You have clicked me";
    } else {
        return false;
    }
  };
  
  document.querySelector("#uv").addEventListener("click", Click_Event_Handler);
});