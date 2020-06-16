 window.onscroll = function () {
   scrollFunction()
 };

 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementsByClassName("navbar-light")[0].classList.add("fixed-top")
   } else {
     document.getElementsByClassName("navbar-light")[0].classList.remove("fixed-top")
   }
 }

 // 2KNHX-6XCMH-83Y6G-4RV82-2DKTY