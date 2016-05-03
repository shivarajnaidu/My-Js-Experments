//script to make element responsive to its parrent element's width in mobile devices
//Make element to adjust its size to opt with its parrent element
//This work is Licensed Under MIT License.. see license file in root directory
<script type="text/javascript">

function responsive_element(target_element)
{

let re = target_element; //reponsive element(element which calls this function)

let sw=window.innerWidth ||document.documentElement.clientWidth || document.body.clientWidth; //returns width of the screen

/*Here I assumed devices with less than 650px screen width are mobile devices */
if (sw <= 650) {

let wre = re.parentElement.clientWidth || re.parentNode.clientWidth; // returns width of parent of called element

re.style.boxSizing="border-box";

re.style.width=re.width=wre+"px";

re.style.height=re.height=(wre/2)+"px";

};

};

