import "./progress.css";
import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>Skills</h2>
            <h3>My Skills Progress so far</h3>
          </div>
          <div className="progress-row2">
            <div className=" col-lg-6 col-md-6" data-aos="zoom-in">
              <div className="progress-bar2">
                <div className="skill-info pt-2">
                  <div className="skill-detail">
                    <div>
                      <i className="bx bx-devices"></i>
                    </div>
                    <div className="skill-name">Backend Development</div>
                  </div>
                  <div className="skill-perct"></div>
                </div>
                <div className="fullwidth clearfix" data-percent="90%">
                  <div className="skill-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
