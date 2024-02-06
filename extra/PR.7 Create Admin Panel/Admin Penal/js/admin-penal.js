$(".sidebar .aside-list li:not(.menu li)").click(function(){
  $(this).parent(".aside-list").find("li").removeClass("active");
  $(this).parent(".accordion").parent(".aside-list").find("li").removeClass("active");
  $(this).addClass("active");
  $(this).parent(".accordion").find(".menu").toggle();
  $(this).parent(".accordion").siblings(".accordion").find(".menu").hide();
  $(this).parent(".aside-list").children(".accordion").siblings(".accordion").find(".menu").hide();

});


$(".toggle").click(function(){
  $("aside").toggleClass("slide-left");
  $("header,main,footer").toggleClass("fullscreen");
  $("aside").toggleClass("aside-section");
});




// $(window).bind("breakpoint-change", function(event) {
//   // $(window).breakpoints("lessThan", "md", function() {
//   //   ...
//   // });
//   alert("Hello");
// });


// $(window).breakpoints("greaterEqualTo", "md", function() {
//   // Do something else
//   alert("hello");
// });

// $(".togale").click(function(){
  
// });


// $("li").click(function(){
//   $(this).parent(".accordion").find(".menu").toggle();
//   $(this).parent(".accordion").siblings(".accordion").find(".menu").hide();

//   $(this).parent(".accordion").parent(".aside-list").find("li").removeClass("activ");
//   $(this).parent(".accordion").find(".menu").toggle();
//   $(this).parent(".accordion").siblings(".accordion").find(".menu").hide();
// });

// $(".menu li").click(function(){
//   //$(this).addClass("active");
//   $(this).parent(".menu").siblings(".menu").find("li").removeClass("active");
//   // $(this).parent("ul")
//   console.log("Hello..");
// });