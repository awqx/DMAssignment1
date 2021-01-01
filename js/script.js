/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// let ddMenu = document.getElementById("ddmenu");
// ddMenu.addEventListener("click",
// 	function() {
// 		this.classList.toggle("active");
// 		var ddContent = document.getElementById("ddcontent");
// 		if (ddContent.style.display === "block") {
// 		  ddContent.style.display = "none";
// 		}	else {
// 		  ddContent.style.display = "block";
// 		}
// 	}
// );

function ddDisplay() {
    var ddContent = document.getElementById("ddcontent");
    if (ddContent.style.display === "block") {
        ddContent.style.display = "none";
    }	else {
        ddContent.style.display = "block";
    }
}