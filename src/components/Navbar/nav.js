import $ from "jquery";

const Main = () => {
  // hambager menu
  $(document).ready(function () {
    $(".menuBtn").click(function () {
      $(this).toggleClass("act");
      if ($(this).hasClass("act")) {
        $(".mainMenu").addClass("act");
      } else {
        $(".mainMenu").removeClass("act");
      }
    });
  });

  // click to scroll
  $(document).ready(function () {
    $(".mainMenu li a").click(function (e) {
      var targetHref = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(targetHref).offset().top,
        },
        1000
      );
      $(".mainMenu").removeClass("act");

      if ($(this).hasClass("act")) {
        $(".menuBtn").addClass("act");
      } else {
        $(".menuBtn").removeClass("act");
      }

      e.preventDefault();
    });
  });

  // change navbar color on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbur");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  // toggle light and dark theme
  $(window).on("load", function () {
    $(".toggle").on("click", () => {
      $("body").toggleClass("light");
    });
  });

  return <></>;
};

export default Main;
