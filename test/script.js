const $icon = $('.menu-btn');
const $menu = $('.overlay');
const $data = $('.container2');

$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
 		$menu.fadeIn().toggleClass('active');
    $data.fadeOut().removeClass('active');
  } else {
    $menu.fadeOut().removeClass('active');
    $data.fadeIn().removeClass('active');
  }
});

var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");

    var Next = document.getElementById("Next");
    var Back = document.getElementById("Back");

    Next.onclick = function(){
      Form1.style.left = "-450px";
      Form2.style.left = "40px";
    }

    Back.onclick = function(){
      Form1.style.left = "40px";
      Form2.style.left = "450px";
    }