$(document).ready(function() {
  const path = $('#path').attr('src').replace('1.jpg', '');
  setTimeout(function() {
    $('.preloader').fadeOut();
    var t;
    $("body").vegas({
      delay: 992 < $(document).width() ? 2e4 : 4e3,
       animation: "kenburns",
       overlay: !0,
       preload: !0,
       timer: !1,
       slides: 992 < $(document).width() ? [{
                                            src: path + '1.jpg',
                                             video: {
                                             src: [path + '1.mp4', ],
                                              loop: !0,
                                              mute: !0
                                             }
                                            }
                                            ,
                                            (t = {
                                             src: path + '2.jpg'
                                             }
                                             ,
                                             _defineProperty(t, "src", path + '2.jpg'),
                                             _defineProperty(t, "video", {
                                                              src: [path + '1.mp4'],
                                                               loop: !0,
                                                               mute: !0
                                                              }
                                                             ), t),
                                            {
                                            src: path + '3.jpg',
                                             video: {
                                             src: [path + '1.mp4'],
                                              loop: !0,
                                              mute: !0
                                             }
                                            }
                                           ] : [{
                                                src: path + '1.jpg'
                                                }
                                                ,
                                                {
                                                src: path + '2.jpg'
                                                }
                                                ,
                                                {
                                                src: path + '3.jpg'
                                                }
                                                ,
                                                {
                                                src: path + '4.jpg'
                                                }
                                                ,
                                                {
                                                src: path + '5.jpg'
                                                }
                                                ,
                                                {
                                                src: path + '6.jpg'
                                                }
                                               ]
      }
    );
  }
              , 1500);
  $(".step:first-child").find(".btnbox").addClass("fadeInUp");
  $(".next").on("click", function(t) {
    var s;
    t.preventDefault();
    (s = $(this)).closest(".step").hide().next().fadeIn();
    s.closest(".step").next().find(".btnbox").addClass("fadeInUp");
    $("li.active").removeClass("active").next().addClass("active");
    $(".progress > .bar").animate({
      width: "+=" + 100 / 6 + "%"
      }
    );
  }
                );
  $(".go-to-age").on("click", function (t) {
    var s;
    t.preventDefault();
    (s = $(this)).closest(".step").hide().nextAll('.step--age').fadeIn();
    s.closest(".step").next().find(".btnbox").addClass("fadeInUp");
    $("li.active").removeClass("active").next().addClass("active");
    $(".progress > .bar").animate({
      width: "75%"
      }
    );
    $('.text25').hide();
  }
                     );
}
                  );
