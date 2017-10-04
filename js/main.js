
// Defines our vars early on to keep from having to call them over and over.
var v1 = $('#video1');
var v1c = $('#video1 > .content');
var v2 = $('#video2');
var v2c = $('#video2 > .content');
var v3 = $('#video3');
var v3c = $('#video3 > .content');
var gb = $('#goBack');

// These are our HTML helpers, using the videojs library.
var v1html = '<video autoplay id="my-video" class="video-js vjs-fluid"  preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}"><source src="vid/vid_earlyboats.mp4" type="video/mp4"></video>';
var v2html = '<video autoplay id="my-video" class="video-js vjs-fluid"  preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}"><source src="vid/vid_hoot.mp4" type="video/mp4"></video>';
var v3html = '<video autoplay id="my-video" class="video-js vjs-fluid"  preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}"><source src="vid/vid_ken.mp4" type="video/mp4"></video>';

// Displays the first video section.
var displayOne = function(){
  v1.css('width','100%');
  v2.css('width','0');
  v3.css('width','0');
  gb.css('opacity','1');
  hideContent(v2c);
  hideContent(v3c);
  $('#vidPlayer1').slideDown();
};

// Displays the second video section.
var displayTwo = function(){
  v1.css('width','0');
  v2.css('width','100%');
  v3.css('width','0');
  gb.css('opacity','1');
  hideContent(v1c);
  hideContent(v3c);
  $('#vidPlayer2').slideDown();
};

// Displays the third video section.
var displayThree = function(){
  v1.css('width','0');
  v2.css('width','0');
  v3.css('width','100%');
  gb.css('opacity','1');
  hideContent(v1c);
  hideContent(v2c);
  $('#vidPlayer3').slideDown();
};

// Lets us hide content on the fly. Due to the size of the project we're not going to bother with removing the instance.
var hideContent = function(content){
  content.css('opacity','0');
};

// Restores our content.
var restoreContent = function(content){
  content.css('opacity','100');
};

// Resets our view to the norm.
var resetView = function() {
  if ($('#my-video')){
    console.log("video exists");
    $('#my-video').remove();
  } else {
    console.log("video does not exist");
  }
  // Resets our view.
  v1.css('width','33%');
  v2.css('width','33%');
  v3.css('width','33%');
  gb.css('opacity','0');
  restoreContent(v1c);
  $('#vidPlayer1').slideUp();
  restoreContent(v2c);
  $('#vidPlayer2').slideUp();
  restoreContent(v3c);
  $('#vidPlayer3').slideUp();
};

// Display the first video panel when anything is clicked on the left side.
$('#video1').on('click', function() {
  displayOne();
});

// Display the second video panel when anything is clicked on the right side.
$('#video2').on('click', function() {
  displayTwo();
});

// Display the third video panel when anything is clicked on the right side.
$('#video3').on('click', function() {
  displayThree();
});

// Calls our reset view function when somebody clicks on our Go Back button.
$('#goBack').on('click',function() {
  resetView();
});

// When our firstview button is clicked, init a video and get it ready to roll fullscreen.
$('#vidPlayer1').on('click', function(){
  $("#video1").append(v1html);
  hideContent(v1c);
});

// When our secondview button is clicked, init a video and get it ready to roll fullscreen.
$('#vidPlayer2').on('click', function(){
  $("#video1").append(v2html);
  hideContent(v2c);
});

// When our thirdview button is clicked, init a video and get it ready to roll fullscreen.
$('#vidPlayer3').on('click', function(){
  $("#video3").append(v3html);
  hideContent(v3c);
});
