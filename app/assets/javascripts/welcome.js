// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


//= require jquery
//= require jquery_ujs

$(document).ready(function () {
  // alert("hello!")

  $('#clickme').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $('#aboutme').offset().top
    }, 800);
  });
});


// $("button").click(function () {
//   $('html,body').animate({
//       scrollTop: $(".second").offset().top
//     },
//     'slow');
// });



// $(document).ready(function () {

//   setTimeout(function () {
//     $('body').addClass('loaded');
//     $('h1').css('color', '#222222');
//   }, 3000);

// });





// $(document).ready ->
//   setTimeout ->
//     $('body').addClass 'loaded'
//     $('h1').css 'color', '#222222'
//     return
//   , 3000
//   return


// $(document).ready(function () {
//       $('#present').mouseenter(function () {
//           alert("MouseEnter!"); // This will create an alert box
//           console.log("MouseEnter!"); // This will log to the JS console on your browser which is a bit nicer to read than alerts, you do not need both, just preference
//           $(this).fadeIn('fast', 1);
//       });
//         $('#present').mouseleave(function () {
//             alert("MouseLeave!"); // This will create an alert box
//             console.log("MouseLeave!");
//             $(this).fadeIn('fast', 0.5);
//           });
//         });

// $(document).ready(function () {
//   $('#present').mouseenter(function () {
//     $(this).fadeIn('fast', 1);
//   }).mouseleave(function () {
//     $(this).fadeIn('fast', 0.5);
//   });
// });