/*UV sharer*/
/* This function will create social sharing buttons with transparent background overlay
In-order to improve performance and to reduce clutter, This function uses dynamic CSS classes technique to create/style transparent background overlay instead directly styling the elements with JavaScript.. So you have to define styles for layout created by this function and have to pass to function and have to apply them with script*/

document.addEventListener("DOMContentLoaded", function() {
  "use strict";
  function socialSharinglinkCreator() {

    function elementCreator(reqElement) {
      let elem = document.createElement(reqElement.name);
      elem.className = reqElement.class_name || "";
      elem.id = reqElement.id || "";
      elem.title = reqElement.title || "";
      return elem;
    }

    function linkCreator(link_) {
      let a = elementCreator({name: "A", class_name: link_.cname, id: link_.id, title: link_.title});
      a.text = link_.text || "#";
      a.href = link_.href || "#";
      a.target = link_.target || "_blank";
      return a;
    }
    
    let sharingButtonsclassname = "social-sharing-buttons";

    let facebook = {};
    facebook.text = "Facebook";
    facebook.href = "https://www.facebook.com/sharer.php?u=" + location.href;
    facebook.cname = sharingButtonsclassname;
    facebook.title = "Share On Facebook";
    facebook.id = "fb-sharer-uv";

    let twitter = {};
    twitter.text = "Twitter";
    twitter.href = "https://twitter.com/share?url=" + location.href;
    twitter.cname = sharingButtonsclassname;
    twitter.title = "Share On Twitter";
    twitter.id = "twitter-sharer-uv";

    let googlePlus = {};
    googlePlus.text = "Google+";
    googlePlus.href = "https://plus.google.com/share?url=" + location.href;
    googlePlus.cname = sharingButtonsclassname;
    googlePlus.title = "Share On Google Plus";
    googlePlus.id = "gplus-sharer-uv";

    let reddit = {};
    reddit.text = "Reddit";
    reddit.href = "https://www.reddit.com/submit?url=" + location.href;
    reddit.cname = sharingButtonsclassname;
    reddit.title = "Share On Reddit";
    reddit.id = "reddit-sharer-uv";

    let linkedin = {};
    linkedin.text = "linkedin"
    linkedin.href = "https://www.linkedin.com/shareArticle?url=" + location.href;
    linkedin.cname = sharingButtonsclassname;
    linkedin.title = "Share On LinkedIn"
    linkedin.id = "linkedin-sharer-uv";


    let facebookButton = linkCreator(facebook);
    let googleplusButton = linkCreator(googlePlus);
    let twitterButton = linkCreator(twitter);
    let redditButton = linkCreator(reddit);
    let linkedinButton = linkCreator(linkedin);

    let containerDiv = elementCreator({name: "DIV", id: "social-sharing-link-container-layout"});
    containerDiv.appendChild(facebookButton);
    containerDiv.appendChild(twitterButton);
    containerDiv.appendChild(googleplusButton);
    containerDiv.appendChild(linkedinButton);
    containerDiv.appendChild(redditButton);
    document.body.appendChild(containerDiv);

    function socialShareLayouthandler(event) {
      containerDiv.style.display = "none";
      document.body.removeChild(containerDiv);
    }
    containerDiv.addEventListener("click", socialShareLayouthandler);
  }

  //document.querySelector("#share").addEventListener("click", socialSharinglinkCreator);
  socialSharinglinkCreator();

});
