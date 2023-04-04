import React from "react";
import Stars from "../common/Stars";
const About = () => {
  return (
    <>
      <section className="page-section bg-primary text-white mb-5">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <Stars color="light" />

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                I am frontend developer.I have full command on React js HTML,
                CSS Bootstarp, and Tailwind css etc. Now I am looking forward to
                become a fullstack developer.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                I have done my Mcs from The Islamia university of Bahawalpur
                with 3.8 CGPA.Where I build the lots of project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
