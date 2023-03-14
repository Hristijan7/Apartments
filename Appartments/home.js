let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
   
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("activeImg"); 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex-1]);
  slides[slideIndex-1].classList.add("activeImg"); 
  dots[slideIndex-1].className += " active";
} 

  var ctrlVideo = document.getElementById("banner-video"); 
   
  $('#btnVideo').on("click", function(){
    controlFunction('#btnVideo');
  });
   
  $('#banner-video').on("click", function(){
    ctrlVideo.pause();
    $('#btnVideo').html("<i class='fa fa-play  fa-lg' aria-hidden='true'></i>");
    $('#btnVideo').addClass("activeVideo");
  });

function controlFunction(cBtn){
  console.log(cBtn);
  if ($(cBtn).hasClass("activeVideo")){
    playFunction(cBtn) 
  } else {
    pauseFunction(cBtn);
  }
}

function pauseFunction(btn){
  ctrlVideo.pause();
  $(btn).html("<i class='fa fa-play  fa-lg' aria-hidden='true'></i>");
  $(btn).toggleClass("activeVideo");
}

function playFunction(btn){
  ctrlVideo.play(); 
  $(btn).html("Pause");
  $(btn).toggleClass("activeVideo");
}


var isopend = false;
var storedId = 0;
$('.restaurant .fa').click(function(){
  resetToggles(); 
  openContent(this); 
});

function resetToggles(){
  var allRest = $(".restaurant .content");
  var allRestFa = $(".restaurant .fa");
  var allRestDetails = $(".restaurentDetails p");
  
  $.each(allRest, function(key, el) { 
    $(el).css('display', 'none');
  });

  $.each(allRestFa, function(key, el) { 
    $(el).removeClass("fa-minus-circle");
  });

  $.each(allRestDetails, function(key, el) { 
    $(el).css('display', 'none');
  }); 
}

function openContent(thisEl){
  var mainDiv = thisEl.parentNode.parentNode;  
  var mainDivId = $(mainDiv).attr('id');
  if(storedId != mainDivId){
    storedId = mainDivId;
    $(thisEl).toggleClass("fa-minus-circle");
    $(mainDiv.querySelector('.content')).toggle(true);
    isopend = true;
    $(".km-"+mainDivId).toggle(); 
  }
  else{
    if(isopend === true){
      $(mainDiv.querySelector('.content')).toggle(false);
      isopend = false; 
    }else{
      $(thisEl).toggleClass("fa-minus-circle");
      $(mainDiv.querySelector('.content')).toggle();
      isopend = true;
      $(".km-"+mainDivId).toggle(); 
    } 
  }
}

var opendNav = false;
var nav = $("#navigatorbar"); 
$(".open").on("click", function (){ 
    if(opendNav == false){ 
        $("#navigatorbar ul, #navigatorbar .search, #navigatorbar .schedule").addClass("menu-open");
        opendNav = true;
    }
    else{
        $("#navigatorbar ul, #navigatorbar .search, #navigatorbar .schedule").removeClass("menu-open"); 
        opendNav = false;
    } 
});

/*$(".pic-1").on("click", function(){
    $("#postedByPictures").append('<img src="people.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});


$(".pic-2").on("click", function(){
    $("#postedByPictures").append('<img src="pic-2.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});

$(".pic-3").on("click", function(){
    $("#postedByPictures").append('<img src="pic-3.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});

$(".pic-4").on("click", function(){
    $("#postedByPictures").append('<img src="pic-4.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});

$(".pic-5").on("click", function(){
    $("#postedByPictures").append('<img src="pic-5.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});

$(".pic-6").on("click", function(){

    $("#postedByPictures").append('<img src="pic-6.jpg" alt="people" width="500" height="600">');
    $("#postedByPictures button").css("display", "block");
});

$("#postedByPictures button").on("click", function(){
  $("#postedByPictures > img").remove()
  $("#postedByPictures button").css("display", "none");
});*/

var images = document.querySelectorAll(".column img");
var expandImg = document.getElementById("expandedImg");
var imgText = document.getElementById("imgtext");

var current_pic;
var max_pics;


function myFunction(id) {  
  expandImg.src = document.getElementById("pic-"+id).src; 

  current_pic= id;
  max_pics = document.querySelectorAll("#postedByPictures img").length;
 
  //imgText.innerHTML = document.getElementById(id).alt;
  expandImg.parentElement.style.display = "block";

}


function nextImg(){
  console.log($(this));
  //expandImg.style.display = "none";
  //expandImg.src = document.getElementById("pic-"+id).src; 
  var next_pic = current_pic + 1;
  console.log(current_pic + 1)
  if(next_pic > max_pics) {
    console.log("next");
    next_pic = 1; 
  }
  expandImg.src = document.getElementById("pic-"+next_pic).src; 
    
  //$('.NewContainer img').eq(current_pic).show();

  $('.NewContainer img').eq(current_pic).fadeOut(1000);
  $('.NewContainer img').eq(next_pic).fadeIn(1000);
    
  current_pic = next_pic;
}

function prevImg(){
  console.log($(this));
  //expandImg.style.display = "none";
  var prev_pic = current_pic - 1;
  console.log(current_pic - 1)
  if(prev_pic < 1) { 
    prev_pic = max_pics; 
  }
  expandImg.src = document.getElementById("pic-"+prev_pic).src; 
    
  $('.NewContainer img').eq(current_pic).fadeOut(1000);
  $('.NewContainer img').eq(prev_pic).fadeIn(1000);
    
  current_pic = prev_pic;
}

//show first pic
//$('.NewContainer img').eq().show(); 
