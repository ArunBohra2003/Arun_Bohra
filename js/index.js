// jshint esversion: 6
window.onscroll = function() { myFunction(); };

let navbar = document.getElementsByClassName("navigation")[0];
let sticky = navbar.offsetTop;

let heading = document.getElementsByClassName("about-section")[0];

function myFunction() {
  if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky");
  } else {
       navbar.classList.remove("sticky");
  }
}

let buttons = document.querySelectorAll(".button-container button");
let tabPanel = document.querySelectorAll(".tab-container .tab-panel");

function showPanel(panelIndex, colorCode) {
     buttons.forEach(function(node) {
          node.style.backgroundColor = "";
          node.style.color = "";
     });
     buttons[panelIndex].style.backgroundColor = colorCode;
     buttons[panelIndex].style.color = "#fff";

     tabPanel.forEach(function(node) {
          node.style.display = "none";
     });
     tabPanel[panelIndex].style.display = "block";
}

showPanel(0, "#3D348B");

// let navbarItems = document.querySelectorAll(".navbar li a");
//
// if (window.innerWidth <= 730) {
//
//      for (i = 0; i<navbarItems.length; i++) {
//           switch (i) {
//                case i=0:
//                     navbarItems[i].innerHTML = '<i class="fas fa-home"></i>';
//                     break;
//                case i=1:
//                     navbarItems[i].innerHTML = '<i class="fas fa-user"></i>';
//                     break;
//
//                case i=2:
//                     navbarItems[i].innerHTML = '<i class="fas fa-cogs"></i>';
//                     break;
//
//                case i=3:
//                     navbarItems[i].innerHTML = '<i class="fas fa-file-alt"></i>';
//                     break;
//                case i=4:
//                     navbarItems[i].innerHTML = '<i class="fas fa-address-book"></i>';
//                     break;
//           }
//      }
// }
