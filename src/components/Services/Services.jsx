const Services = () => {
  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>Services</h2>
            <h3>What Service i Offer you</h3>
          </div>

          <div className="service-row">
            <div
              className=" my-service"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <img src="" alt="service-icon" />
              <h4 className="web">Service Name</h4>
              <p className="service-info">Service Desc</p>
              {/* <h6 className="learn-more">Service Learn More</h6> */}
              <div className="shadow-icon">
                <i className=""></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
