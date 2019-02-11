



// top button
window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

	function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// change background
$(document).on('mouseover', '.container1 .column', function(){
  		$(this).addClass('active').siblings().removeClass('active')
 })

// loader
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// disclaimer button

function myFunctions() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}






