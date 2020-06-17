$(document).ready(function () {
  $(".item-one").show(); // item 1 :))
  if ($(".item-one").show()) {
    $(".li-video-one").addClass("red");
  }
  $(".item-two").hide(); // item 2 :))
  $(".item-thrid").hide(); // item 3 :))

  $(".li-video-one").mouseenter(function () {
    // item 1 :))
    $(".item-one").show();
    $(".item-two").hide();
    $(".item-thrid").hide();
    $(".li-video-one").addClass("red");
    $(".li-video-two").removeClass("red");
    $(".li-video-thrid").removeClass("red");
  });

  $(".li-video-two").mouseenter(function () {
    // item 2 :))
    $(".item-one").hide();
    $(".item-two").show();
    $(".item-thrid").hide();
    $(".li-video-two").addClass("red");
    $(".li-video-one").removeClass("red");
    $(".li-video-thrid").removeClass("red");
  });

  $(".li-video-thrid").mouseenter(function () {
    // item 3 :))
    $(".item-one").hide();
    $(".item-two").hide();
    $(".item-thrid").show();
    $(".li-video-thrid").addClass("red");
    $(".li-video-two").removeClass("red");
    $(".li-video-one").removeClass("red");
  });

  //owl-carousel
  $(".dots").mouseenter(function () {
    this.click();
    this.addClass("opacity");
  });
  $(".dots").mouseover(function () {
    this.removeClass("opacity");
  });

  //auto play slyde
  setInterval(function () {
    $(".carousel-control-next").click();
  }, 3000);
});
